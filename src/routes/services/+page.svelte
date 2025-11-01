<!-- src/routes/services/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { getServiceIconUrl } from '$lib/data/services';
	import type { PageData } from './$types';

	export let data: PageData;

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
			<div class="relative z-10 mx-auto max-w-6xl text-center">
				<div in:fly={{ y: 30, duration: 600 }}>
					<h1
						class="mb-6 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
					>
						My Services
					</h1>
					<p class="mx-auto max-w-3xl text-xl text-secondary-400 md:text-2xl">
						Comprehensive web development solutions to grow your business online
					</p>
				</div>
			</div>
		{/if}
	</section>

	<!-- Services Grid -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			{#if data.services.length === 0}
				<div class="py-20 text-center">
					<div
						class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-secondary-900/50 text-5xl"
					>
						🔧
					</div>
					<p class="text-lg text-secondary-400">No services available at the moment</p>
				</div>
			{:else}
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each data.services as service, i}
						<a
							href="/services/{service.slug}"
							class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20"
							in:fly={{ y: 50, delay: i * 100 }}
						>
							<!-- Gradient Overlay on Hover -->
							<div
								class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							></div>

							<div class="relative z-10">
								<!-- Service Icon -->
								<div
									class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-500/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary-500/20 group-hover:shadow-lg group-hover:shadow-primary-500/30"
								>
									{#if service.icon.endsWith('.png') || service.icon.endsWith('.svg') || service.icon.endsWith('.jpg') || service.icon.endsWith('.webp')}
										<img
											src={getServiceIconUrl(service, service.icon)}
											alt={service.title}
											class="h-12 w-12 object-contain"
										/>
									{:else}
										<span class="text-5xl">{service.icon}</span>
									{/if}
								</div>

								<!-- Title -->
								<h3
									class="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary-400"
								>
									{service.title}
								</h3>

								<!-- Description -->
								<p class="mb-6 line-clamp-3 text-secondary-400">
									{service.shortDescription}
								</p>

								<!-- Pricing -->
								<div
									class="mb-6 flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4 text-sm"
								>
									<div>
										<div class="text-secondary-500">Starting at</div>
										<div class="font-semibold text-primary-400">{service.pricing.starting}</div>
									</div>
									<div class="text-right">
										<div class="text-secondary-500">Timeline</div>
										<div class="font-semibold text-accent-400">{service.pricing.timeline}</div>
									</div>
								</div>

								<!-- View Service Button -->
								<div
									class="flex items-center gap-2 font-semibold text-primary-400 transition-all duration-300 group-hover:gap-4"
								>
									Learn More
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
			{/if}
		</div>
	</section>

	<!-- Why Choose Me -->
	<section class="border-t border-white/5 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<h2
				class="mb-12 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center text-4xl font-bold text-transparent"
			>
				Why Work With Me
			</h2>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each [{ icon: '⚡', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' }, { icon: '🎯', title: 'Results-Focused', desc: 'Solutions that achieve your business goals' }, { icon: '💬', title: 'Clear Communication', desc: 'Regular updates and transparent process' }, { icon: '🛡️', title: 'Quality Guarantee', desc: 'High standards and ongoing support' }] as benefit, i}
					<div
						class="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20"
						in:fly={{ y: 30, delay: i * 100 }}
					>
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/10 text-4xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary-500/20"
						>
							{benefit.icon}
						</div>
						<h3 class="mb-2 text-xl font-semibold text-white group-hover:text-primary-400">
							{benefit.title}
						</h3>
						<p class="text-sm text-secondary-400">{benefit.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-6 text-4xl font-bold text-white">Ready to Get Started?</h2>
			<p class="mx-auto mb-8 max-w-2xl text-lg text-secondary-400">
				Let's discuss your project and find the perfect solution for your needs
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50"
				>
					<span class="relative z-10">Get a Quote</span>
					<div
						class="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-500 to-primary-500 transition-transform duration-300 group-hover:translate-x-0"
					></div>
				</a>
				<a
					href="/projects"
					class="rounded-full border-2 border-primary-500 px-8 py-4 font-semibold text-primary-400 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20"
				>
					View Portfolio
				</a>
			</div>
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

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>