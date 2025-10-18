# syntax=docker/dockerfile:1
ARG NODE_VERSION=24.8.0

################################################################################
# Base image (shared)
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

# allow buildkit mounts for caching (already used in later stages)
################################################################################
# Stage: deps (production deps cached)
FROM base AS deps

# Copy package manifests via buildkit bind mounts for best cache behavior.
# Use npm ci --omit=dev to install production deps only.
# Cache npm files between builds for speed.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev --silent

################################################################################
# Stage: build (install dev deps & build)
FROM base AS build

# Install full deps (dev + prod) needed for build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --silent

# Copy source files and build artifacts
COPY . .

# Run your build (assumes "build" script is configured in package.json)
RUN npm run build --silent

################################################################################
# Stage: final (runtime)
FROM node:${NODE_VERSION}-alpine AS final
WORKDIR /usr/src/app

# runtime environment
ENV NODE_ENV=production
ENV PORT=3000

# Create a dedicated non-root user (alpine's node user exists, but ensure directory ownership)
# We'll run the app as this user.
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy package.json for informational purposes (and in case start script needs it)
COPY package.json package-lock.json* ./

# Copy production node_modules from deps stage (keeps runtime small)
# and copy build artifacts from build stage.
# Use --chown to ensure the non-root user owns files.
COPY --from=deps --chown=appuser:appgroup /usr/src/app/node_modules ./node_modules
COPY --from=build --chown=appuser:appgroup /usr/src/app/build ./build

# If you have a public/static folder required at runtime, copy it (optional)
# COPY --from=build --chown=appuser:appgroup /usr/src/app/static ./static
# COPY --from=build --chown=appuser:appgroup /usr/src/app/public ./public

# Expose port used by SvelteKit adapter-node (or whatever PORT you configure)
EXPOSE ${PORT}

# Simple healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://localhost:${PORT}/ || exit 1

# Switch to non-root user
USER appuser

# Default command: use your package.json start script (should run node build)
# Make sure package.json has e.g. "start": "node build" or "start": "node build/index.js"
CMD ["npm", "run", "start"]
