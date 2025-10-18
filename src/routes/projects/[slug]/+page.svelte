<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { getProjectBySlug, projects } from '$lib/data/projects';

	let isVisible = false;
	let project: ReturnType<typeof getProjectBySlug> = undefined;
	let relatedProjects: typeof projects = [];

	$: slug = $page.params.slug;

	onMount(() => {
		isVisible = true;
		loadProject();
	});

	function loadProject() {
		if (!slug) return;
		project = getProjectBySlug(slug);

		if (project) {
			// Get related projects from same category
			relatedProjects = projects
				.filter((p) => p.category === (project ?? {}).category && p.slug !== (project ?? {}).slug)
				.slice(0, 3);
		}
	}

	$: if (slug) {
		loadProject();
	}
</script>

<svelte:head>
	{#if project}
		<title>{project.title} - Paul Mbui</title>
		<meta name="description" content={project.shortDescription} />
	{/if}
</svelte:head>

{#if !project}
	<div
		class="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 text-white"
	>
		<div class="text-center">
			<div class="mb-6 text-8xl">😕</div>
			<h1 class="mb-4 text-4xl font-bold">Project Not Found</h1>
			<p class="mb-8 text-slate-400">The project you're looking for doesn't exist.</p>
			<a
				href="/projects"
				class="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold transition-transform hover:scale-105"
			>
				View All Projects
			</a>
		</div>
	</div>
{:else}
	<div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
		<!-- Hero Section -->
		<section class="relative overflow-hidden px-6 pt-32 pb-20">
			<div class="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					class="animate-blob absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-500 opacity-10 mix-blend-multiply blur-3xl filter"
				></div>
				<div
					class="animate-blob animation-delay-2000 absolute top-0 right-1/4 h-96 w-96 rounded-full bg-pink-500 opacity-10 mix-blend-multiply blur-3xl filter"
				></div>
			</div>

			{#if isVisible}
				<div class="relative z-10 mx-auto max-w-6xl">
					<div in:fly={{ y: 30, duration: 600 }}>
						<!-- Back Button -->
						<a
							href="/projects"
							class="mb-8 inline-flex items-center gap-2 text-purple-400 transition-all hover:gap-3"
						>
							<span>←</span> Back to Projects
						</a>

						<!-- Category Badge -->
						<div
							class="mb-6 inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300"
						>
							{project.category}
						</div>

						<h1
							class="mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
						>
							{project.title}
						</h1>
						<p class="mb-8 max-w-3xl text-xl text-slate-300 md:text-2xl">
							{project.shortDescription}
						</p>

						<!-- Project Meta -->
						<div class="flex flex-wrap gap-6 text-sm">
							<div class="flex items-center gap-2">
								<span class="text-slate-400">Client:</span>
								<span class="font-semibold">{project.client}</span>
							</div>
							<div class="flex items-center gap-2">
								<span class="text-slate-400">Duration:</span>
								<span class="font-semibold">{project.duration}</span>
							</div>
							<div class="flex items-center gap-2">
								<span class="text-slate-400">Year:</span>
								<span class="font-semibold">{project.year}</span>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</section>

		<!-- Main Content -->
		<section class="px-6 py-20">
			<div class="mx-auto max-w-6xl">
				<!-- Project Showcase -->
				<div class="mb-20" in:fly={{ y: 30, delay: 200 }}>
					<div
						class="relative aspect-video rounded-2xl bg-gradient-to-br {project.gradient} group overflow-hidden p-1"
					>
						<div
							class="absolute inset-0 bg-gradient-to-br {project.gradient} opacity-20 transition-opacity group-hover:opacity-30"
						></div>
						<div
							class="relative flex h-full w-full items-center justify-center rounded-xl bg-slate-900"
						>
							<div class="text-9xl">{project.image}</div>
						</div>
					</div>

					<!-- Action Buttons -->
					<div class="mt-8 flex flex-wrap gap-4">
						{#if project.liveUrl}
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold transition-transform hover:scale-105"
							>
								View Live Site <span>→</span>
							</a>
						{/if}
						{#if project.githubUrl}
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 rounded-lg border-2 border-purple-500 px-6 py-3 font-semibold transition-all hover:scale-105 hover:bg-purple-500/10"
							>
								💻 View Code
							</a>
						{/if}
					</div>
				</div>

				<div class="grid gap-12 lg:grid-cols-3">
					<!-- Main Content -->
					<div class="space-y-12 lg:col-span-2">
						<!-- About Project -->
						<div in:fly={{ y: 30, delay: 300 }}>
							<h2 class="mb-6 text-3xl font-bold text-purple-400">About the Project</h2>
							<p class="text-lg leading-relaxed text-slate-300">
								{project.description}
							</p>
						</div>

						<!-- Features -->
						<div in:fly={{ y: 30, delay: 400 }}>
							<h2 class="mb-6 text-3xl font-bold text-purple-400">Key Features</h2>
							<div class="space-y-4">
								{#each project.features as feature, i}
									<div
										class="flex items-start gap-4 rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 transition-all hover:border-purple-500/50"
									>
										<div class="mt-1 text-2xl">✓</div>
										<p class="text-slate-300">{feature}</p>
									</div>
								{/each}
							</div>
						</div>

						<!-- Challenges -->
						<div in:fly={{ y: 30, delay: 500 }}>
							<h2 class="mb-6 text-3xl font-bold text-purple-400">Challenges & Solutions</h2>
							<div class="space-y-4">
								{#each project.challenges as challenge, i}
									<div class="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
										<div class="mb-3 flex items-center gap-3">
											<div
												class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 font-bold text-purple-400"
											>
												{i + 1}
											</div>
											<h3 class="font-semibold">Challenge #{i + 1}</h3>
										</div>
										<p class="text-slate-300">{challenge}</p>
									</div>
								{/each}
							</div>
						</div>

						<!-- Results -->
						<div in:fly={{ y: 30, delay: 600 }}>
							<h2 class="mb-6 text-3xl font-bold text-purple-400">Results & Impact</h2>
							<div class="grid gap-6 sm:grid-cols-3">
								{#each project.results as result, i}
									<div
										class="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 text-center transition-transform hover:scale-105"
									>
										<div class="mb-3 text-4xl">
											{i === 0 ? '📈' : i === 1 ? '⚡' : '🎯'}
										</div>
										<p class="text-sm text-slate-300">{result}</p>
									</div>
								{/each}
							</div>
						</div>

						<!-- Gallery -->
						{#if project.gallery && project.gallery.length > 0}
							<div in:fly={{ y: 30, delay: 700 }}>
								<h2 class="mb-6 text-3xl font-bold text-purple-400">Project Gallery</h2>
								<div class="grid grid-cols-2 gap-4">
									{#each project.gallery as item, i}
										<div
											class="group flex aspect-video items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/30 transition-all hover:border-purple-500/50"
										>
											<div class="text-6xl transition-transform group-hover:scale-110">{item}</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					</div>

					<!-- Sidebar -->
					<div class="space-y-8">
						<!-- Tech Stack -->
						<div
							class="sticky top-24 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6"
							in:fly={{ x: 50, delay: 300 }}
						>
							<h3 class="mb-4 text-xl font-bold">Technologies Used</h3>
							<div class="space-y-3">
								{#each project.tech as tech}
									<div
										class="rounded-lg border border-slate-700/30 bg-slate-900/50 px-4 py-2 text-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/10"
									>
										{tech}
									</div>
								{/each}
							</div>
						</div>

						<!-- CTA -->
						<div
							class="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6"
							in:fly={{ x: 50, delay: 400 }}
						>
							<h3 class="mb-3 text-xl font-bold">Interested in Similar Work?</h3>
							<p class="mb-4 text-sm text-slate-400">
								Let's discuss how I can help with your project.
							</p>
							<a
								href="/contact"
								class="block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-center font-semibold transition-transform hover:scale-105"
							>
								Get In Touch
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Related Projects -->
		{#if relatedProjects.length > 0}
			<section class="border-t border-slate-800 px-6 py-20">
				<div class="mx-auto max-w-6xl">
					<h2
						class="mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-center text-4xl font-bold text-transparent"
					>
						Related Projects
					</h2>
					<div class="grid gap-8 md:grid-cols-3">
						{#each relatedProjects as relatedProject, i}
							<a
								href="/projects/{relatedProject.slug}"
								class="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all hover:scale-105"
								in:fly={{ y: 30, delay: i * 100 }}
							>
								<div
									class="absolute inset-0 bg-gradient-to-br {relatedProject.gradient} opacity-0 transition-opacity group-hover:opacity-10"
								></div>
								<div class="relative z-10 p-6">
									<div class="mb-4 text-5xl">{relatedProject.image}</div>
									<h3 class="mb-2 text-xl font-bold">{relatedProject.title}</h3>
									<p class="line-clamp-2 text-sm text-slate-400">
										{relatedProject.shortDescription}
									</p>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</section>
		{/if}
	</div>
{/if}

<style>
	@keyframes blob {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		25% {
			transform: translate(20px, -50px) scale(1.1);
		}
		50% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		75% {
			transform: translate(20px, 50px) scale(1.05);
		}
	}

	.animate-blob {
		animation: blob 7s infinite;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
