<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { projects, categories } from '$lib/data/projects.js';

	let isVisible = false;
	let selectedCategory = 'All';
	let filteredProjects = projects;

	onMount(() => {
		isVisible = true;
	});

	function filterProjects(category: string) {
		selectedCategory = category;
		if (category === 'All') {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter((p) => p.category === category);
		}
	}
</script>

<svelte:head>
	<title>Projects - Paul Mbui | Web Development Portfolio</title>
	<meta
		name="description"
		content="Explore Paul Mbui's portfolio of web development projects including e-commerce platforms, CMS solutions, and data analytics dashboards."
	/>
</svelte:head>

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
					<h1
						class="mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
					>
						My Projects
					</h1>
					<p class="max-w-3xl text-xl text-slate-300 md:text-2xl">
						A showcase of my work - from e-commerce platforms to data analytics dashboards
					</p>
				</div>
			</div>
		{/if}
	</section>

	<!-- Filter Section -->
	<section
		class="sticky top-0 z-30 border-b border-slate-800/50 bg-slate-950/80 px-6 py-8 backdrop-blur-md"
	>
		<div class="mx-auto max-w-6xl">
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category, i}
					<button
						on:click={() => filterProjects(category)}
						class="rounded-full px-6 py-2 font-medium transition-all {selectedCategory === category
							? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50'
							: 'border border-slate-700/50 bg-slate-800/50 hover:border-purple-500/50'}"
						in:fly={{ y: -20, delay: i * 50 }}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Projects Grid -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredProjects as project, i (project.slug)}
					<a
						href="/projects/{project.slug}"
						class="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
						in:fly={{ y: 50, delay: i * 100 }}
					>
						<div
							class="absolute inset-0 bg-gradient-to-br {project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10"
						></div>

						<div class="relative z-10 p-6">
							<!-- Project Icon -->
							<div class="mb-4 text-5xl transition-transform group-hover:scale-110">
								{project.image}
							</div>

							<!-- Category Badge -->
							<div
								class="mb-3 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300"
							>
								{project.category}
							</div>

							<!-- Title -->
							<h3
								class="mb-2 text-xl font-bold group-hover:bg-gradient-to-r group-hover:text-transparent group-hover:{project.gradient} transition-all group-hover:bg-clip-text"
							>
								{project.title}
							</h3>

							<!-- Description -->
							<p class="mb-4 line-clamp-2 text-sm text-slate-400">
								{project.shortDescription}
							</p>

							<!-- Tech Stack -->
							<div class="mb-4 flex flex-wrap gap-2">
								{#each project.tech.slice(0, 3) as tech}
									<span class="rounded bg-slate-700/50 px-2 py-1 text-xs text-purple-300">
										{tech}
									</span>
								{/each}
								{#if project.tech.length > 3}
									<span class="rounded bg-slate-700/50 px-2 py-1 text-xs text-slate-400">
										+{project.tech.length - 3}
									</span>
								{/if}
							</div>

							<!-- View Project -->
							<div
								class="flex items-center gap-2 text-sm font-semibold text-purple-400 transition-all group-hover:gap-3"
							>
								View Details <span>→</span>
							</div>
						</div>
					</a>
				{/each}
			</div>

			{#if filteredProjects.length === 0}
				<div class="py-20 text-center">
					<div class="mb-4 text-6xl">🔍</div>
					<p class="text-lg text-slate-400">No projects found in this category</p>
				</div>
			{/if}
		</div>
	</section>

	<!-- CTA Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-6 text-4xl font-bold">Like What You See?</h2>
			<p class="mb-8 text-lg text-slate-400">
				Let's discuss how I can help bring your project to life
			</p>
			<a
				href="/contact"
				class="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold shadow-lg shadow-purple-500/50 transition-transform hover:scale-105"
			>
				Start a Project
			</a>
		</div>
	</section>
</div>

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
