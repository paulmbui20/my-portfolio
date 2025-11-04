<!-- src/routes/services/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { getServiceIconUrl } from '$lib/data/services';
	import type { PageData } from './$types';
	import ServicesSection from '$lib/components/sections/services.svelte';

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
	<section class="relative overflow-hidden px-6 py-12">
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

	<!-- Services Grid (delegated to reusable component) -->
	<section class="px-6 py-10">
		<div class="mx-auto max-w-6xl">
			<ServicesSection services={data.services} />
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