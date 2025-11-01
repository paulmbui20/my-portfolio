<!-- src/routes/projects/[slug]/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { getImageUrl, getGalleryUrls } from '$lib/data/projects';
	import type { PageData } from './$types';

	export let data: PageData;

	let isVisible = false;
	let showLightbox = false;
	let currentImageIndex = 0;
	let lightboxImages: string[] = [];

	let project: any;
	let relatedProjects: any[] = [];

	$: project = (data as any)?.project;
	$: relatedProjects = (data as any)?.relatedProjects ?? [];

	onMount(() => {
		isVisible = true;
	});

	function openLightbox(index: number) {
		if (project?.gallery) {
			lightboxImages = getGalleryUrls(project);
			currentImageIndex = index;
			showLightbox = true;
			document.body.style.overflow = 'hidden';
		}
	}

	function closeLightbox() {
		showLightbox = false;
		document.body.style.overflow = 'auto';
	}

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
	}

	function previousImage() {
		currentImageIndex = (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!showLightbox) return;

		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowRight') nextImage();
		if (e.key === 'ArrowLeft') previousImage();
	}
</script>

<svelte:head>
	{#if project}
		<title>{project.title} - Paul Mbui</title>
		<meta name="description" content={project.shortDescription} />
	{/if}
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section class="relative overflow-hidden px-6 pt-24 pb-12">
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
					<!-- Back Button -->
					<a
						href="/projects"
						class="mb-6 inline-flex items-center gap-2 text-primary-400 transition-all duration-300 hover:gap-3 hover:text-primary-300"
					>
						<span class="transition-transform group-hover:-translate-x-1">←</span> Back to Projects
					</a>

					<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
						<!-- Left: Content -->
						<div>
							<!-- Category Badge -->
							<div
								class="mb-4 inline-block rounded-full border border-primary-500/30 bg-primary-500/20 px-4 py-1.5 text-sm font-medium text-primary-300 backdrop-blur-sm"
							>
								{project.category}
							</div>

							<h1
								class="mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
							>
								{project.title}
							</h1>
							<p class="mb-6 text-lg text-secondary-400 md:text-xl">
								{project.shortDescription}
							</p>

							<!-- Project Meta -->
							<div class="mb-6 flex flex-wrap gap-4 text-sm">
								<div
									class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2"
								>
									<span class="text-secondary-500">Client:</span>
									<span class="font-semibold text-white">{project.client}</span>
								</div>
								<div
									class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2"
								>
									<span class="text-secondary-500">Duration:</span>
									<span class="font-semibold text-white">{project.duration}</span>
								</div>
								<div
									class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2"
								>
									<span class="text-secondary-500">Year:</span>
									<span class="font-semibold text-white">{project.year}</span>
								</div>
							</div>

							<!-- Action Buttons -->
							<div class="flex flex-wrap gap-4">
								{#if project.liveUrl}
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50"
									>
										<span class="relative z-10">View Live Site</span>
										<span
											class="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
											>→</span
										>
										<div
											class="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-500 to-primary-500 transition-transform duration-300 group-hover:translate-x-0"
										></div>
									</a>
								{/if}
								{#if project.githubUrl}
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 rounded-lg border-2 border-primary-500 px-6 py-3 font-semibold text-primary-400 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20"
									>
										💻 View Code
									</a>
								{/if}
							</div>
						</div>

						<!-- Right: Featured Image -->
						<div in:fly={{ x: 50, delay: 200 }}>
							<div
								class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-1 shadow-2xl"
							>
								<div class="aspect-video overflow-hidden rounded-xl">
									<img
										src={getImageUrl(project, project.image)}
										alt={project.title}
										class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</section>

	<!-- Main Content -->
	<section class="px-6 py-12">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-8 lg:grid-cols-3">
				<!-- Main Content -->
				<div class="space-y-12 lg:col-span-2">
					<!-- About Project -->
					<div in:fly={{ y: 30, delay: 300 }}>
						<h2 class="mb-6 text-3xl font-bold text-primary-400">About the Project</h2>
						<div class="text-lg leading-relaxed text-secondary-300" >
							{@html project.description}
						</div>
					</div>

					<!-- Features -->
					<div in:fly={{ y: 30, delay: 400 }}>
						<h2 class="mb-6 text-3xl font-bold text-primary-400">Key Features</h2>
						<div class="space-y-3">
							{#each project.features as feature}
								<div
									class="group flex items-start gap-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-4 transition-all duration-300 hover:-translate-x-1 hover:border-primary-500/50 hover:bg-white/[0.05]"
								>
									<div
										class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-sm font-bold text-primary-400 transition-all duration-300 group-hover:bg-primary-500/30"
									>
										✓
									</div>
									<p class="text-secondary-300">{feature}</p>
								</div>
							{/each}
						</div>
					</div>

					<!-- Challenges -->
					<div in:fly={{ y: 30, delay: 500 }}>
						<h2 class="mb-6 text-3xl font-bold text-primary-400">Challenges & Solutions</h2>
						<div class="space-y-4">
							{#each project.challenges as challenge, i}
								<div
									class="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 transition-all duration-300 hover:border-primary-500/50"
								>
									<div class="mb-3 flex items-center gap-3">
										<div
											class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-sm font-bold text-primary-400"
										>
											{i + 1}
										</div>
										<h3 class="font-semibold text-white">Challenge #{i + 1}</h3>
									</div>
									<p class="text-secondary-300">{challenge}</p>
								</div>
							{/each}
						</div>
					</div>

					<!-- Results -->
					<div in:fly={{ y: 30, delay: 600 }}>
						<h2 class="mb-6 text-3xl font-bold text-primary-400">Results & Impact</h2>
						<div class="grid gap-6 sm:grid-cols-3">
							{#each project.results as result, i}
								<div
									class="group rounded-xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20"
								>
									<div
										class="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110"
									>
										{i === 0 ? '📈' : i === 1 ? '⚡' : '🎯'}
									</div>
									<p class="text-sm text-secondary-300">{result}</p>
								</div>
							{/each}
						</div>
					</div>

					<!-- Gallery -->
					{#if project.gallery && project.gallery.length > 0}
						<div in:fly={{ y: 30, delay: 700 }}>
							<h2 class="mb-6 text-3xl font-bold text-primary-400">Project Gallery</h2>
							<div class="grid grid-cols-2 gap-4">
								{#each getGalleryUrls(project) as item, i}
									<button
										on:click={() => openLightbox(i)}
										class="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent transition-all duration-300 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10"
									>
										<img
											src={item}
											alt="Gallery Item {i + 1}"
											class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										<div
											class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
										>
											<div
												class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/20 backdrop-blur-sm"
											>
												<span class="text-2xl">🔍</span>
											</div>
										</div>
									</button>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<!-- Sidebar -->
				<div class="space-y-6">
					<!-- Tech Stack -->
					<div
						class="sticky top-24 rounded-xl border border-white/10 bg-black p-6 shadow-lg"
						in:fly={{ x: 50, delay: 300 }}
					>
						<h3 class="mb-4 text-xl font-bold text-white">Technologies Used</h3>
						<div class="space-y-2">
							{#each project.tech as tech}
								<div
									class="rounded-lg border border-white/10 bg-gradient-to-br from-primary-500/5 to-transparent px-4 py-2.5 text-sm font-medium text-primary-300 transition-all duration-300 hover:border-primary-500/30 hover:bg-primary-500/10"
								>
									{tech}
								</div>
							{/each}
						</div>
					</div>

					<!-- CTA -->
					<div
						class="sticky top-[28rem] rounded-xl border border-primary-500/30 bg-black p-6 shadow-lg shadow-primary-500/10"
						in:fly={{ x: 50, delay: 400 }}
					>
						<h3 class="mb-3 text-xl font-bold text-white">Interested in Similar Work?</h3>
						<p class="mb-4 text-sm text-secondary-400">
							Let's discuss how I can help with your project.
						</p>
						<a
							href="/contact"
							class="group relative block overflow-hidden rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50"
						>
							<span class="relative z-10">Get In Touch</span>
							<div
								class="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-500 to-primary-500 transition-transform duration-300 group-hover:translate-x-0"
							></div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Related Projects -->
	{#if relatedProjects.length > 0}
		<section class="border-t border-white/5 px-6 py-20">
			<div class="mx-auto max-w-6xl">
				<h2
					class="mb-12 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center text-4xl font-bold text-transparent"
				>
					Related Projects
				</h2>
				<div class="grid gap-8 md:grid-cols-3">
					{#each relatedProjects as relatedProject, i}
						<a
							href="/projects/{relatedProject.slug}"
							class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20"
							in:fly={{ y: 30, delay: i * 100 }}
						>
							<div
								class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							></div>
							<div class="relative aspect-video overflow-hidden">
								<img
									src={getImageUrl(relatedProject, relatedProject.image)}
									alt={relatedProject.title}
									class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
							</div>
							<div class="relative z-10 p-6">
								<h3 class="mb-2 text-xl font-bold text-white group-hover:text-primary-400">
									{relatedProject.title}
								</h3>
								<p class="line-clamp-2 text-sm text-secondary-400">
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

<!-- Lightbox Modal -->
{#if showLightbox}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
		on:click={closeLightbox}
		transition:fade={{ duration: 200 }}
	>
		<!-- Close Button -->
		<button
			on:click={closeLightbox}
			class="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary-500/50 hover:bg-primary-500/20"
			aria-label="Close lightbox"
		>
			✕
		</button>

		<!-- Image Counter -->
		<div
			class="absolute top-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
		>
			{currentImageIndex + 1} / {lightboxImages.length}
		</div>

		<!-- Previous Button -->
		{#if lightboxImages.length > 1}
			<button
				on:click|stopPropagation={previousImage}
				class="absolute left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/50 text-3xl text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary-500/50 hover:bg-primary-500/20"
				aria-label="Previous image"
			>
				←
			</button>
		{/if}

		<!-- Image Container -->
		<div
			class="relative mx-auto flex h-[85vh] max-w-7xl items-center justify-center px-20"
			on:click|stopPropagation
		>
			<img
				src={lightboxImages[currentImageIndex]}
				alt="Gallery image {currentImageIndex + 1}"
				class="max-h-full max-w-full rounded-lg object-contain shadow-2xl shadow-primary-500/20"
				transition:scale={{ duration: 300 }}
			/>
		</div>

		<!-- Next Button -->
		{#if lightboxImages.length > 1}
			<button
				on:click|stopPropagation={nextImage}
				class="absolute right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/50 text-3xl text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary-500/50 hover:bg-primary-500/20"
				aria-label="Next image"
			>
				→
			</button>
		{/if}

		<!-- Thumbnails -->
		{#if lightboxImages.length > 1}
			<div
				class="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-black/50 p-2 backdrop-blur-sm"
			>
				{#each lightboxImages as img, i}
					<button
						on:click|stopPropagation={() => (currentImageIndex = i)}
						class="h-16 w-16 overflow-hidden rounded-lg border-2 transition-all duration-300 {i ===
						currentImageIndex
							? 'scale-110 border-primary-500'
							: 'border-white/20 opacity-60 hover:border-primary-500/50 hover:opacity-100'}"
					>
						<img src={img} alt="Thumbnail {i + 1}" class="h-full w-full object-cover" />
					</button>
				{/each}
			</div>
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