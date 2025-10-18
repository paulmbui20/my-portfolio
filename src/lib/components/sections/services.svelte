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
			items: ['React', 'SvelteKit', 'TypeScript', 'TailwindCSS', 'Next.js', 'Vue.js']
		},
		{
			category: 'Backend',
			items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
		},
		{
			category: 'Tools & Platforms',
			items: ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel', 'GitHub Actions']
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
		<div class="absolute right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
	</div>

	<div class="relative z-10 mx-auto max-w-6xl">
		<!-- Header -->
		<div class="mb-16 space-y-4 text-center">
			<span class="font-mono text-sm text-emerald-400">SERVICES & EXPERTISE</span>
			<h2 class="text-4xl font-bold md:text-5xl">What I Do</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-400">
				Comprehensive solutions tailored to meet your business needs with cutting-edge technology
			</p>
		</div>

		<!-- Services Grid -->
		<div class="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service (service.id)}
				<div
					data-id={service.id}
					data-observe
					class="group relative cursor-pointer rounded-xl border border-emerald-500/20 bg-gradient-to-br from-gray-900/50 to-black/50 p-8 transition-all duration-500 hover:border-emerald-500/50 hover:from-emerald-500/5 hover:to-black/50 {visibleItems.has(
						String(service.id)
					)
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'}"
					style="transition: all 0.5s ease-out 0.{service.id * 50}ms"
				>
					<div class="mb-4 text-4xl">{service.icon}</div>
					<h3 class="mb-2 text-xl font-bold transition-colors group-hover:text-emerald-400">
						{service.title}
					</h3>
					<p class="leading-relaxed text-gray-400">
						{service.description}
					</p>
					<div
						class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					/>
				</div>
			{/each}
		</div>

		<!-- Skills Section -->
		<div class="mt-20 border-t border-emerald-500/20 pt-20">
			<div class="mb-12">
				<span class="font-mono text-sm text-emerald-400">TECHNICAL EXPERTISE</span>
				<h3 class="mt-2 text-3xl font-bold">My Skills</h3>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				{#each skills as skillGroup}
					<div class="space-y-4">
						<h4 class="text-lg font-bold text-emerald-400">{skillGroup.category}</h4>
						<div class="space-y-2">
							{#each skillGroup.items as skill}
								<div class="flex items-center gap-2">
									<span class="h-2 w-2 rounded-full bg-emerald-400" />
									<span class="text-gray-300">{skill}</span>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
