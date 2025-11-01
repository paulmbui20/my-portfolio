<!-- src/lib/components/projects.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { getProjects, getImageUrl } from '$lib/data/projects';
  import type { Project } from '$lib/pocketbase';

  let projects: Project[] = [];
  let loading = true;
  let visibleProjects = new Set<string>();

  onMount(() => {
    let observer: IntersectionObserver;

    getProjects()
      .then((result) => {
        projects = result;
        loading = false;

        // Fade-in observer
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const id = (entry.target as HTMLElement).dataset.id;
                if (id) {
                  visibleProjects.add(id);
                  visibleProjects = new Set(visibleProjects);
                }
              }
            });
          },
          { rootMargin: '0px 0px -100px 0px' }
        );

        requestAnimationFrame(() => {
          document
            .querySelectorAll('[data-observe]')
            .forEach((el) => observer.observe(el));
        });
      })
      .catch((err) => {
        console.error('Failed to load projects:', err);
        loading = false;
      });

    return () => observer?.disconnect();
  });
</script>

<section id="projects" class="relative bg-black px-6 py-20 text-white">
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      class="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
    ></div>
  </div>

  <div class="relative z-10 mx-auto max-w-6xl">
    <!-- Section Header -->
    <div class="mb-16 space-y-4 text-center md:text-left">
      <span class="font-mono text-sm text-emerald-400">MY RECENT WORKS</span>
      <h2 class="text-4xl font-bold md:text-5xl">Featured Projects</h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-400 md:mx-0">
        Showcasing a selection of projects that demonstrate my expertise in
        full-stack development
      </p>
    </div>

    <!-- Loading / Empty -->
    {#if loading}
      <div class="flex justify-center py-20">
        <div
          class="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"
        ></div>
      </div>
    {:else if projects.length === 0}
      <div class="py-20 text-center text-gray-400">
        No projects available at the moment.
      </div>
    {:else}
      <!-- Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each projects as project, i (project.id)}
          <a
            href={`/projects/${project.slug}`}
            data-id={project.id}
            data-observe
            class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/20
              {visibleProjects.has(project.id)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'}"
            style="transition: all 0.6s ease-out {i * 100}ms;"
          >
            <!-- Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></div>

            <!-- Project Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                src={getImageUrl(project, project.image) || '/placeholder.jpg'}
                alt={project.title}
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              ></div>

              <!-- Category Badge -->
              {#if project.category}
                <div
                  class="absolute bottom-4 left-4 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm"
                >
                  {project.category}
                </div>
              {/if}
            </div>

            <!-- Content -->
            <div class="relative z-10 p-6">
              <h3
                class="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400"
              >
                {project.title}
              </h3>
              <p class="mb-4 line-clamp-2 text-sm text-gray-400">
                {project.shortDescription}
              </p>

              <!-- Tech -->
              <div class="mb-4 flex flex-wrap gap-2">
                {#each project.tech.slice(0, 3) as tech}
                  <span
                    class="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs font-medium text-emerald-300 transition-colors group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10"
                  >
                    {tech}
                  </span>
                {/each}
                {#if project.tech.length > 3}
                  <span
                    class="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs font-medium text-gray-500"
                  >
                    +{project.tech.length - 3}
                  </span>
                {/if}
              </div>

              <!-- View Project -->
              <div
                class="flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-all duration-300 group-hover:gap-4"
              >
                View Details
                <span
                  class="transition-transform duration-300 group-hover:translate-x-1"
                  >→</span
                >
              </div>
            </div>

            <!-- Shine -->
            <div
              class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            ></div>
          </a>
        {/each}
      </div>

      <!-- View All Button -->
      <div class="mt-16 flex justify-center">
        <a
          href="/projects"
          class="group relative inline-block overflow-hidden rounded-full border border-emerald-500/50 bg-transparent px-8 py-3 font-semibold text-emerald-400 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500/10 hover:shadow-2xl"
        >
          <span class="relative z-10">View All Projects →</span>
          <div
            class="absolute inset-0 -translate-x-full bg-gradient-to-r from-emerald-500/30 to-transparent transition-transform duration-300 group-hover:translate-x-0"
          ></div>
        </a>
      </div>
    {/if}
  </div>
</section>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
