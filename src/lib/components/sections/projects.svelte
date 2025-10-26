<script lang="ts">
	import { onMount } from 'svelte';

	let visibleProjects = new Set();

	const projects = [
		{
			id: 1,
			title: 'Nasha Technologies business website',
			description: 'IT and cybersecurity  firm with a focus based in Tanzania.',
			tags: ['SvelteKit', 'Node.js', 'TailwindCSS', 'FormSpark'],
			image: '/images/nashatech.co.tz-screenshot-responsive-mockup.webp',
			link: '/projects/nasha-technologies',
			featured: true
		},
		{
			id: 2,
			title: 'Bii Edwin Hypno Therapist website',
			description: 'A certified Mind Shifting Coach and Advanced Conversational Hypnotherapist',
			tags: ['Worpress', 'PHP', 'MySQL', 'Zoho'],
			image: '/images/biiedwin-website-screenshot-responsive-mockup.webp',
			link: '/projects/bii-edwin-hypnotherapist'
		},
		{
			id: 3,
			title: 'AcerSchoolApp School Management System',
			description:
				'A school management system that allows teachers, students, admins and parents to manage their school activities and learning easily.',
			tags: ['Python', 'Django', 'PostgreSQL', 'TailwindCSS', 'Docker'],
			image: '/images/acerschoolapp-screenshot-responsive-mockup.webp',
			link: '/projects/acerschoolapp'
		}
	];

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					visibleProjects.add((entry.target as HTMLElement).dataset.id);
					visibleProjects = visibleProjects;
				}
			});
		});

		document.querySelectorAll('[data-observe]').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<section id="projects" class="relative bg-black px-6 py-20">
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div class="absolute top-0 left-20 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-6xl">
		<!-- Section Header -->
		<div class="mb-16 space-y-4">
			<span class="font-mono text-sm text-emerald-400">MY RECENT WORKS</span>
			<h2 class="text-4xl font-bold md:text-5xl">Featured Projects</h2>
			<p class="max-w-2xl text-lg text-gray-400">
				Showcasing a selection of projects that demonstrate my expertise in full-stack development
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="grid gap-8">
			{#each projects as project (project.id)}
				<div
					data-id={project.id}
					data-observe
					class="group relative overflow-hidden rounded-xl border border-emerald-500/20 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 {visibleProjects.has(
						String(project.id)
					)
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'}"
					style="transition: all 0.6s ease-out 0.{project.id * 100}ms"
				>
					<!-- Background -->
					<div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950"></div>

					<div class="relative z-10 flex flex-col md:flex-row">
						<!-- Image -->
						<div class="relative h-64 overflow-hidden md:h-auto md:w-2/5">
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"
							></div>
						</div>

						<!-- Content -->
						<div class="flex flex-col justify-between p-8 md:w-3/5">
							<div>
								<h3
									class="mb-3 text-2xl font-bold transition-colors group-hover:text-emerald-400 md:text-3xl"
								>
									{project.title}
								</h3>
								<p class="mb-6 text-lg text-gray-400">
									{project.description}
								</p>

								<!-- Tags -->
								<div class="mb-6 flex flex-wrap gap-2">
									{#each project.tags as tag}
										<span
											class="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 transition-colors hover:bg-emerald-500/20"
										>
											{tag}
										</span>
									{/each}
								</div>
							</div>

							<!-- Link -->
							<a
								href={project.link}
								class="group/link inline-flex items-center gap-2 font-semibold text-emerald-400 transition-all hover:gap-3"
							>
								View Project
								<svg
									class="h-5 w-5 transition-transform group-hover/link:translate-x-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7l5 5m0 0l-5 5m5-5H6"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- View all button -->
		<div class="mt-16 flex justify-center">
			<a
				href="/projects"
				class="rounded-lg border border-emerald-500 px-8 py-3 font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20"
			>
				View All Projects →
			</a>
		</div>
	</div>
</section>
