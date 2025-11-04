<script lang="ts">
	import { onMount } from 'svelte';
	import type { Service } from '$lib/data/services';
	import { getServices as fetchServices, getServiceIconUrl } from '$lib/data/services';

	// Optional prop: if the parent passes `services`, use it. Otherwise fetch inside the component.
	export let services: Service[] | null = null;

	let servicesLocal: Service[] = [];
	let visibleItems = new Set();

	const skills = [
		{
			category: 'Frontend',
			items: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'JQuery', 'HTML', 'CSS'],
			color: 'from-primary-500/20 to-teal-500/20'
		},
		{
			category: 'Backend',
			items: ['Django', 'FastAPI', 'PostgreSQL', 'MySQL', 'Redis', 'REST APIs'],
			color: 'from-teal-500/20 to-cyan-500/20'
		},
		{
			category: 'Tools & Platforms',
			items: ['WordPress', 'Git', 'Docker', 'Render', 'Vercel', 'GitHub Actions'],
			color: 'from-cyan-500/20 to-primary-500/20'
		}
	];

	onMount(() => {
		let observer: IntersectionObserver | undefined;

		const startObserver = () => {
			observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = (entry.target as HTMLElement).dataset.id;
						if (id) {
							visibleItems.add(id);
							visibleItems = new Set(visibleItems);
						}
					}
				});
			}, { rootMargin: '0px 0px -100px 0px' });

			// Wait a frame so the DOM is rendered
			requestAnimationFrame(() => {
				document.querySelectorAll('[data-observe]').forEach((el) => observer!.observe(el));
			});
		};

		// If parent didn't pass services, fetch them
		if (!services || services.length === 0) {
			fetchServices()
				.then((records) => {
					servicesLocal = records;
					startObserver();
				})
				.catch((e) => {
					console.error('Failed to fetch services inside component', e);
					servicesLocal = [];
					startObserver();
				});
		} else {
			servicesLocal = services;
			startObserver();
		}

		return () => observer?.disconnect();
	});
</script>

<section id="services" class="relative isolate px-6">
	<div class="pointer-events-none absolute inset-0 -z-20">
		<div class="absolute right-20 top-20 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl"></div>
		<div class="absolute left-20 bottom-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-6xl">
		<!-- Header -->
		<div class="mb-16 space-y-4 text-center">
			<span class="font-mono text-sm text-primary-400">SERVICES & EXPERTISE</span>
			<h2 class="text-4xl font-bold text-white md:text-5xl">What I Do</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-400">
				Professional web development services in Kenya - delivering cutting-edge solutions for businesses worldwide
			</p>
		</div>

<!-- Services Grid — updated to match projects section animations -->
<div class="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
  {#each (servicesLocal ?? services ?? []) as service, i (service.id)}
    <a
      href={`/services/${service.slug}`}
      data-id={service.id}
      data-observe
      title={service.title}
      aria-label={`View details for ${service.title}`}
      aria-describedby={`service-desc-${service.id}`}
      class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black
        {visibleItems.has(String(service.id))
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'}"
      style="transition: all 0.6s ease-out {i * 100}ms;"
    >
      <!-- Gradient Overlay - matching projects section -->
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-400/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden="true"
      ></div>

      <!-- Icon container: updated to match projects image container styling -->
      <div class="relative h-32 overflow-hidden flex items-center justify-center">
        <div
          class="relative h-24 w-24 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-2 border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary-500/30 group-focus-within:scale-110 overflow-hidden"
          aria-hidden="true"
        >
          <!-- Inner glow effect -->
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
          
          {#if service.icon && (service.icon.endsWith('.png') || service.icon.endsWith('.svg') || service.icon.endsWith('.jpg') || service.icon.endsWith('.webp'))}
            <img
              src={getServiceIconUrl(service, service.icon)}
              alt="{service.title} icon"
              class="relative z-10 h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          {:else}
            <span class="relative z-10 text-4xl transition-transform duration-500 group-hover:scale-110">{service.icon}</span>
          {/if}
        </div>
      </div>

      <!-- Content wrapper with proper spacing - matching projects layout -->
      <div class="relative z-10 p-4 flex flex-col items-center text-center">
        <h3 class="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary-400">
          {service.title}
        </h3>
        <p 
          id={`service-desc-${service.id}`}
          class="mb-4 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300"
        >
          {service.shortDescription ?? service.description}
        </p>

        <!-- View Details Link (matching projects section styling) -->
        <div
          class="flex items-center justify-center gap-2 text-sm font-semibold text-primary-400 transition-all duration-300 group-hover:gap-4"
        >
          <span>Learn More</span>
          <span
            class="transition-transform duration-300 group-hover:translate-x-1"
          >→</span>
        </div>
      </div>

      <!-- Shine effect - exact same as projects section -->
      <div
        class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full group-focus-within:translate-x-full"
        aria-hidden="true"
      ></div>

      <!-- Remove the corner accent and bottom line to match projects section cleaner look -->
    </a>
  {/each}
</div>

		<!-- Enhanced Skills Section -->
		<div class="mt-20 border-t border-primary-500/20 pt-20">
			<div class="mb-12 text-center">
				<span class="font-mono text-sm text-primary-400">TECHNICAL EXPERTISE</span>
				<h3 class="mt-2 text-3xl font-bold">Web Development Skills</h3>
				<p class="mt-4 text-gray-400">Modern technologies powering Kenya's digital transformation</p>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				{#each skills as skillGroup, idx}
					<div
						data-id={`skill-${idx}`}
						data-observe
						class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br {skillGroup.color} p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/20 {visibleItems.has(
							`skill-${idx}`
						)
							? 'translate-y-0 opacity-100'
							: 'translate-y-8 opacity-0'}"
						style="transition: all 0.6s ease-out {(idx + 1) * 150}ms;"
					>
						<!-- Gradient Overlay -->
						<div
							class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>

						<!-- Content -->
						<div class="relative z-10 space-y-4">
							<h4 class="text-xl font-bold text-primary-400 transition-colors duration-300 group-hover:text-primary-300">
								{skillGroup.category}
							</h4>
							<div class="space-y-3">
								{#each skillGroup.items as skill}
									<div class="flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
										<div class="h-2 w-2 rounded-full bg-primary-400 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-primary-400/50"></div>
										<span class="text-gray-300 transition-colors duration-300 group-hover:text-white">{skill}</span>
									</div>
								{/each}
							</div>
						</div>

						<!-- Shine Effect -->
						<div
							class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full"
						></div>

						<!-- Corner Glow -->
						<div
							class="absolute left-0 bottom-0 h-24 w-24 -translate-x-12 translate-y-12 rounded-full bg-primary-500/20 blur-2xl transition-all duration-500 group-hover:-translate-x-6 group-hover:translate-y-6"
						></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>