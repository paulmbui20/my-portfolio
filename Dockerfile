ARG NODE_VERSION=24.8.0

################################################################################
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

################################################################################
# Stage: deps (production deps cached)
FROM base AS deps

# Add build tools only if production deps require native compilation (optional)
# For pure JS packages this can be removed to keep final images small.
RUN apk add --no-cache python3 make g++ ca-certificates

# Copy package files (robust glob)
COPY package*.json ./

# Install production deps only with cache (remove --silent to see errors)
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev --no-audit --no-fund

################################################################################
# Stage: build (install dev deps & build)
FROM base AS build

# Add build tools (required to build native addons / run build scripts)
RUN apk add --no-cache python3 make g++ bash git

# Copy package files
COPY package*.json ./

# Install all deps (dev + prod) needed for build (verbose to see errors)
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

# Copy source files and build
COPY . .

# Pass Svelte public environment variables at build time
ARG PUBLIC_POCKETBASE_URL
ENV PUBLIC_POCKETBASE_URL=$PUBLIC_POCKETBASE_URL

ARG PUBLIC_SITE_URL
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL

RUN npm run build

################################################################################
# Stage: final (runtime)
FROM node:${NODE_VERSION}-alpine AS final
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Install curl for healthcheck (wget not installed by default in alpine)
RUN apk add --no-cache curl

# Copy package.json
COPY package.json ./

RUN ls -la /usr/src/app

# Copy production node_modules and build artifacts from earlier stages
COPY --from=deps --chown=appuser:appgroup /usr/src/app/node_modules ./node_modules
COPY --from=build --chown=appuser:appgroup /usr/src/app/build ./build

EXPOSE ${PORT}

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:${PORT}/ || exit 1

USER appuser
CMD ["npm", "run", "start"]