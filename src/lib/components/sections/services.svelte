<script lang="ts">
	import { onMount } from 'svelte';

	let visibleItems = new Set();

	const services = [
		{
			id: 1,
			icon: '🚀',
			title: 'Web & App Development',
			description:
				'Full-stack solutions using modern frameworks and best practices for responsive, scalable applications'
		},
		{
			id: 2,
			icon: '🔧',
			title: 'Performance Optimization',
			description:
				'Optimizing load times, core web vitals, and overall performance to ensure smooth user experiences'
		},
		{
			id: 3,
			icon: '🤖',
			title: 'AI Integration',
			description:
				'Leveraging machine learning and AI to create intelligent features and automate complex processes'
		},
		{
			id: 4,
			icon: '💾',
			title: 'Database Design',
			description:
				'Architecting robust, scalable database solutions with optimal queries and data management'
		},
		{
			id: 5,
			icon: '☁️',
			title: 'Cloud Solutions',
			description:
				'AWS, Firebase, and cloud-native deployment strategies for reliable production systems'
		},
		{
			id: 6,
			icon: '🔐',
			title: 'Security & DevOps',
			description:
				'Implementing security best practices, CI/CD pipelines, and infrastructure automation'
		}
	];

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
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					visibleItems.add((entry.target as HTMLElement).dataset.id);
					visibleItems = visibleItems;
				}
			});
		});

		document.querySelectorAll('[data-observe]').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<section id="services" class="relative bg-black px-6 py-20">
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div class="absolute right-20 top-20 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl"></div>
		<div class="absolute left-20 bottom-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-6xl">
		<!-- Header -->
		<div class="mb-16 space-y-4 text-center">
			<span class="font-mono text-sm text-primary-400">SERVICES & EXPERTISE</span>
			<h2 class="text-4xl font-bold md:text-5xl">What I Do</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-400">
				Professional web development services in Kenya - delivering cutting-edge solutions for businesses worldwide
			</p>
		</div>

		<!-- Services Grid with Enhanced Hover -->
		<div class="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service (service.id)}
				<div
					data-id={service.id}
					data-observe
					class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/20 {visibleItems.has(
						String(service.id)
					)
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'}"
					style="transition: all 0.6s ease-out {service.id * 100}ms;"
				>
					<!-- Gradient Overlay -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-400/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					></div>

					<!-- Content -->
					<div class="relative z-10 p-8">
						<div class="mb-4 text-4xl transition-transform duration-500 group-hover:scale-110">
							{service.icon}
						</div>
						<h3 class="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-primary-400">
							{service.title}
						</h3>
						<p class="leading-relaxed text-gray-400">
							{service.description}
						</p>
					</div>

					<!-- Shine Effect -->
					<div
						class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full"
					></div>

					<!-- Corner Accent -->
					<div
						class="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-primary-500/20 blur-xl transition-all duration-500 group-hover:translate-x-5 group-hover:-translate-y-5"
					></div>
				</div>
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
						data-id="skill-{idx}"
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