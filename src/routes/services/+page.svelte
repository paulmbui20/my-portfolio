<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { services } from '$lib/data/services.js';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<svelte:head>
	<title>Services - Paul Mbui | Web Development Services</title>
	<meta
		name="description"
		content="Professional web development services including custom websites, e-commerce solutions, CMS development, SEO, and maintenance."
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
				class="animate-blob animation-delay-2000 absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary-500 opacity-10 mix-blend-multiply blur-3xl filter"
			></div>
		</div>

		{#if isVisible}
			<div class="relative z-10 mx-auto max-w-6xl text-center">
				<div in:fly={{ y: 30, duration: 600 }}>
					<h1
						class="mb-6 bg-gradient-to-r from-purple-400 to-primary-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
					>
						My Services
					</h1>
					<p class="mx-auto max-w-3xl text-xl text-slate-300 md:text-2xl">
						Comprehensive web development solutions to grow your business online
					</p>
				</div>
			</div>
		{/if}
	</section>

	<!-- Services Grid -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each services as service, i}
					<a
						href="/services/{service.slug}"
						class="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
						in:fly={{ y: 50, delay: i * 100 }}
					>
						<div
							class="absolute inset-0 bg-gradient-to-br {service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10"
						></div>

						<div class="relative z-10 p-8">
							<!-- Service Icon -->
							<div class="mb-6 text-6xl transition-transform group-hover:scale-110">
								{service.icon}
							</div>

							<!-- Title -->
							<h3
								class="mb-3 text-2xl font-bold group-hover:bg-gradient-to-r group-hover:text-transparent group-hover:{service.gradient} transition-all group-hover:bg-clip-text"
							>
								{service.title}
							</h3>

							<!-- Description -->
							<p class="mb-6 line-clamp-3 text-slate-400">
								{service.shortDescription}
							</p>

							<!-- Pricing -->
							<div class="mb-6 flex items-center justify-between text-sm">
								<div>
									<div class="text-slate-500">Starting at</div>
									<div class="font-semibold text-purple-400">{service.pricing.starting}</div>
								</div>
								<div class="text-right">
									<div class="text-slate-500">Timeline</div>
									<div class="font-semibold">{service.pricing.timeline}</div>
								</div>
							</div>

							<!-- View Service -->
							<div
								class="flex items-center gap-2 font-semibold text-purple-400 transition-all group-hover:gap-3"
							>
								Learn More <span>→</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
