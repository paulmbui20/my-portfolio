<!-- src/routes/projects/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { categories } from '$lib/data/projects';
	import { getImageUrl } from '$lib/data/projects';
	import type { PageData } from './$types';

	export let data: PageData;

	let isVisible = false;
	let selectedCategory = 'All';
	let filteredProjects = data.projects;

	onMount(() => {
		isVisible = true;
	});

	function filterProjects(category: string) {
		selectedCategory = category;
		if (category === 'All') {
			filteredProjects = data.projects;
		} else {
			filteredProjects = data.projects.filter((p) => p.category === category);
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

<div class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section class="relative overflow-hidden px-6 pt-32 pb-20">
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div
				class="animate-blob absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-500 opacity-10 mix-blend-multiply blur-3xl filter"
			></div>
			<div
				class="animate-blob animation-delay-2000 absolute top-0 right-1/4 h-96 w-96 rounded-full bg-accent-500 opacity-10 mix-blend-multiply blur-3xl filter"
			></div>
		</div>

		{#if isVisible}
			<div class="relative z-10 mx-auto max-w-6xl">
				<div in:fly={{ y: 30, duration: 600 }}>
					<h1
						class="mb-6 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
					>
						My Projects
					</h1>
					<p class="max-w-3xl text-xl text-secondary-400 md:text-2xl">
						A showcase of my work - from e-commerce platforms to data analytics dashboards
					</p>
				</div>
			</div>
		{/if}
	</section>

	<!-- Filter Section -->
	<section class="sticky top-0 z-30 border-b border-white/5 bg-black/90 px-6 py-6 backdrop-blur-md">
		<div class="mx-auto max-w-6xl">
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category, i}
					<button
						on:click={() => filterProjects(category)}
						class="rounded-full px-6 py-2.5 font-medium transition-all duration-300 {selectedCategory ===
						category
							? 'scale-105 bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30'
							: 'border border-white/10 bg-white/[0.02] text-secondary-300 hover:scale-105 hover:border-primary-500/50 hover:bg-primary-500/10 hover:text-primary-400'}"
						in:fly={{ y: -20, delay: i * 50 }}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Projects Grid -->
	<section class="px-6 py-12">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredProjects as project, i (project.id)}
					<a
						href="/projects/{project.slug}"
						class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20"
						in:fly={{ y: 50, delay: i * 100 }}
					>
						<!-- Gradient Overlay on Hover -->
						<div
							class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>

						<!-- Project Image -->
						<div class="relative h-48 overflow-hidden">
							<img
								src={getImageUrl(project, project.image)}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
							></div>

							<!-- Category Badge on Image -->
							<div
								class="absolute bottom-4 left-4 rounded-full border border-primary-500/30 bg-primary-500/20 px-3 py-1 text-xs font-medium text-primary-300 backdrop-blur-sm"
							>
								{project.category}
							</div>
						</div>

						<div class="relative z-10 p-6">
							<!-- Title -->
							<h3
								class="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary-400"
							>
								{project.title}
							</h3>

							<!-- Description -->
							<p class="mb-4 line-clamp-2 text-sm text-secondary-400">
								{project.shortDescription}
							</p>

							<!-- Tech Stack -->
							<div class="mb-4 flex flex-wrap gap-2">
								{#each project.tech.slice(0, 3) as tech}
									<span
										class="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs font-medium text-primary-300 transition-colors group-hover:border-primary-500/30 group-hover:bg-primary-500/10"
									>
										{tech}
									</span>
								{/each}
								{#if project.tech.length > 3}
									<span
										class="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs font-medium text-secondary-400"
									>
										+{project.tech.length - 3}
									</span>
								{/if}
							</div>

							<!-- View Project -->
							<div
								class="flex items-center gap-2 text-sm font-semibold text-primary-400 transition-all duration-300 group-hover:gap-4"
							>
								View Details
								<span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
							</div>
						</div>

						<!-- Shine Effect -->
						<div
							class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full"
						></div>
					</a>
				{/each}
			</div>

			{#if filteredProjects.length === 0}
				<div class="py-20 text-center">
					<div
						class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-secondary-900/50 text-5xl"
					>
						🔍
					</div>
					<p class="text-lg text-secondary-400">No projects found in this category</p>
				</div>
			{/if}
		</div>
	</section>

	<!-- CTA Section -->
	<section class="px-6 py-16">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Like What You See?</h2>
			<p class="mb-6 text-base text-secondary-400 md:text-lg">
				Let's discuss how I can help bring your project to life
			</p>
			<a
				href="/contact"
				class="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50"
			>
				<span class="relative z-10">Start a Project</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-500 to-primary-500 transition-transform duration-300 group-hover:translate-x-0"
				></div>
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