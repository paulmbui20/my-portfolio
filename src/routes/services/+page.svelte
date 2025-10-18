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
				class="animate-blob absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-500 opacity-10 mix-blend-multiply blur-3xl filter"
			></div>
			<div
				class="animate-blob animation-delay-2000 absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary-500 opacity-10 mix-blend-multiply blur-3xl filter"
			></div>
		</div>

		{#if isVisible}
			<div class="relative z-10 mx-auto max-w-6xl text-center">
				<div in:fly={{ y: 30, duration: 600 }}>
					<h1
						class="mb-6 bg-gradient-to-r from-primary-400 to-primary-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
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
						class="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20"
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
									<div class="font-semibold text-primary-400">{service.pricing.starting}</div>
								</div>
								<div class="text-right">
									<div class="text-slate-500">Timeline</div>
									<div class="font-semibold">{service.pricing.timeline}</div>
								</div>
							</div>

							<!-- View Service -->
							<div
								class="flex items-center gap-2 font-semibold text-primary-400 transition-all group-hover:gap-3"
							>
								Learn More <span>→</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Why Choose Me -->
		<section class="border-t border-slate-800 px-6 py-20">
			<div class="mx-auto max-w-6xl">
				<h2
					class="mb-12 bg-gradient-to-r from-primary-400 to-primary-400 bg-clip-text text-center text-4xl font-bold text-transparent"
				>
					Why Work With Me
				</h2>
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{#each [{ icon: '⚡', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' }, { icon: '🎯', title: 'Results-Focused', desc: 'Solutions that achieve your business goals' }, { icon: '💬', title: 'Clear Communication', desc: 'Regular updates and transparent process' }, { icon: '🛡️', title: 'Quality Guarantee', desc: 'High standards and ongoing support' }] as benefit, i}
						<div
							class="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 text-center transition-all hover:scale-105 hover:border-primary-500/50"
							in:fly={{ y: 30, delay: i * 100 }}
						>
							<div class="mb-4 text-5xl">{benefit.icon}</div>
							<h3 class="mb-2 text-xl font-semibold">{benefit.title}</h3>
							<p class="text-sm text-slate-400">{benefit.desc}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section class="px-6 py-20">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
				<p class="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
					Let's discuss your project and find the perfect solution for your needs
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="/contact"
						class="rounded-full bg-gradient-to-r from-primary-600 to-primary-600 px-8 py-4 font-semibold shadow-lg shadow-primary-500/50 transition-transform hover:scale-105"
					>
						Get a Quote
					</a>
					<a
						href="/projects"
						class="rounded-full border-2 border-primary-500 px-8 py-4 font-semibold transition-all hover:scale-105 hover:bg-primary-500/10"
					>
						View Portfolio
					</a>
				</div>
			</div>
		</section>
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
