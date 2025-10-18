<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { getServiceBySlug, services } from '$lib/data/services.js';

	let isVisible = false;
	let service: ReturnType<typeof getServiceBySlug> = undefined;
	let relatedServices: typeof services = [];

	$: slug = $page.params.slug;

	onMount(() => {
		isVisible = true;
		loadService();
	});

	function loadService() {
		if (slug) {
			service = getServiceBySlug(slug);

			if (service) {
				// Get related services (exclude current)
				relatedServices = services.filter((s) => s.slug !== service?.slug).slice(0, 3);
			}
		}
	}

	$: if (slug) {
		loadService();
	}
</script>

<svelte:head>
	{#if service}
		<title>{service.title} - Paul Mbui</title>
		<meta name="description" content={service.shortDescription} />
	{/if}
</svelte:head>

{#if !service}
	<div
		class="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 text-white"
	>
		<div class="text-center">
			<div class="mb-6 text-8xl">😕</div>
			<h1 class="mb-4 text-4xl font-bold">Service Not Found</h1>
			<p class="mb-8 text-slate-400">The service you're looking for doesn't exist.</p>
			<a
				href="/services"
				class="inline-block rounded-full bg-gradient-to-r from-primary-600 to-primary-600 px-8 py-4 font-semibold transition-transform hover:scale-105"
			>
				View All Services
			</a>
		</div>
	</div>
{:else}
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
				<div class="relative z-10 mx-auto max-w-6xl">
					<div in:fly={{ y: 30, duration: 600 }}>
						<!-- Back Button -->
						<a
							href="/services"
							class="mb-8 inline-flex items-center gap-2 text-primary-400 transition-all hover:gap-3"
						>
							<span>←</span> Back to Services
						</a>

						<!-- Service Icon -->
						<div class="mb-6 text-8xl">{service.icon}</div>

						<h1
							class="mb-6 bg-gradient-to-r from-primary-400 to-primary-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
						>
							{service.title}
						</h1>
						<p class="mb-8 max-w-3xl text-xl text-slate-300 md:text-2xl">
							{service.shortDescription}
						</p>

						<!-- Service Meta -->
						<div class="flex flex-wrap gap-6 text-sm">
							<div class="flex items-center gap-2">
								<span class="text-slate-400">Starting Price:</span>
								<span class="font-semibold text-primary-400">{service.pricing.starting}</span>
							</div>
							<div class="flex items-center gap-2">
								<span class="text-slate-400">Timeline:</span>
								<span class="font-semibold">{service.pricing.timeline}</span>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</section>

		<!-- Main Content -->
		<section class="px-6 py-20">
			<div class="mx-auto max-w-6xl">
				<div class="grid gap-12 lg:grid-cols-3">
					<!-- Main Content -->
					<div class="space-y-12 lg:col-span-2">
						<!-- Overview -->
						<div in:fly={{ y: 30, delay: 200 }}>
							<h2 class="mb-6 text-3xl font-bold text-primary-400">Service Overview</h2>
							<p class="text-lg leading-relaxed text-slate-300">
								{service.description}
							</p>
						</div>

						<!-- Features -->
						<div in:fly={{ y: 30, delay: 300 }}>
							<h2 class="mb-6 text-3xl font-bold text-primary-400">What's Included</h2>
							<div class="grid gap-4 sm:grid-cols-2">
								{#each service.features as feature, i}
									<div
										class="flex items-start gap-3 rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 transition-all hover:border-primary-500/50"
									>
										<div class="mt-0.5 text-xl">✓</div>
										<p class="text-slate-300">{feature}</p>
									</div>
								{/each}
							</div>
						</div>

						<!-- Process -->
						<div in:fly={{ y: 30, delay: 400 }}>
							<h2 class="mb-6 text-3xl font-bold text-primary-400">My Process</h2>
							<div class="space-y-4">
								{#each service.process as step, i}
									<div class="group flex items-start gap-6">
										<div
											class="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br {service.gradient} flex items-center justify-center text-lg font-bold"
										>
											{i + 1}
										</div>
										<div
											class="flex-1 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:border-primary-500/50"
										>
											<h3 class="mb-2 text-xl font-semibold">{step.step}</h3>
											<p class="text-slate-400">{step.description}</p>
										</div>
									</div>
								{/each}
							</div>
						</div>

						<!-- Benefits -->
						<div in:fly={{ y: 30, delay: 500 }}>
							<h2 class="mb-6 text-3xl font-bold text-primary-400">Key Benefits</h2>
							<div class="grid gap-6 sm:grid-cols-2">
								{#each service.benefits as benefit, i}
									<div
										class="rounded-xl border border-primary-500/20 bg-gradient-to-br from-primary-500/10 to-primary-500/10 p-6 transition-transform hover:scale-105"
									>
										<div class="mb-3 text-4xl">
											{i === 0 ? '🎯' : i === 1 ? '📈' : i === 2 ? '⚡' : i === 3 ? '💼' : '✨'}
										</div>
										<p class="text-slate-300">{benefit}</p>
									</div>
								{/each}
							</div>
						</div>

						<!-- Testimonials -->
						{#if service.testimonials && service.testimonials.length > 0}
							<div in:fly={{ y: 30, delay: 600 }}>
								<h2 class="mb-6 text-3xl font-bold text-primary-400">Client Testimonials</h2>
								<div class="space-y-6">
									{#each service.testimonials as testimonial}
										<div class="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8">
											<div class="mb-4 text-5xl">💬</div>
											<p class="mb-6 text-lg text-slate-300 italic">"{testimonial.text}"</p>
											<div>
												<div class="text-lg font-semibold">{testimonial.name}</div>
												<div class="text-slate-400">{testimonial.role}</div>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					</div>

					<!-- Sidebar -->
					<div class="space-y-8">
						<!-- Technologies -->
						<div
							class="sticky top-24 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6"
							in:fly={{ x: 50, delay: 300 }}
						>
							<h3 class="mb-4 text-xl font-bold">Technologies Used</h3>
							<div class="space-y-3">
								{#each service.technologies as tech}
									<div
										class="rounded-lg border border-slate-700/30 bg-slate-900/50 px-4 py-2 text-sm transition-all hover:bg-primary-500/10"
									>
										{tech}
									</div>
								{/each}
							</div>
						</div>

						<!-- Pricing Card -->
						<div
							class="rounded-xl border border-primary-500/30 bg-gradient-to-br from-primary-500/20 to-primary-500/20 p-6"
							in:fly={{ x: 50, delay: 400 }}
						>
							<h3 class="mb-4 text-xl font-bold">Investment</h3>
							<div class="mb-2 text-4xl font-bold text-primary-400">{service.pricing.starting}</div>
							<div class="mb-6 text-sm text-slate-400">Starting price</div>
							<div class="mb-6 flex items-center gap-2 text-sm text-slate-400">
								<span>⏱️</span>
								<span>Timeline: {service.pricing.timeline}</span>
							</div>
							<a
								href="/contact"
								class="block rounded-lg bg-gradient-to-r from-primary-600 to-primary-600 px-6 py-3 text-center font-semibold transition-transform hover:scale-105"
							>
								Request Quote
							</a>
						</div>

						<!-- Quick Contact -->
						<div
							class="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6"
							in:fly={{ x: 50, delay: 500 }}
						>
							<h3 class="mb-4 text-xl font-bold">Have Questions?</h3>
							<p class="mb-4 text-sm text-slate-400">
								I'm here to help! Get in touch to discuss your specific needs.
							</p>
							<div class="space-y-3">
								<a
									href="mailto:hello@paulmbui.co.ke"
									class="flex items-center gap-3 text-sm text-primary-400 transition-colors hover:text-primary-300"
								>
									<span>📧</span>
									<span>hello@paulmbui.co.ke</span>
								</a>
								<a
									href="tel:+254700000000"
									class="flex items-center gap-3 text-sm text-primary-400 transition-colors hover:text-primary-300"
								>
									<span>📱</span>
									<span>+254 700 000 000</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Related Services -->
		{#if relatedServices.length > 0}
			<section class="border-t border-slate-800 px-6 py-20">
				<div class="mx-auto max-w-6xl">
					<h2
						class="mb-12 bg-gradient-to-r from-primary-400 to-primary-400 bg-clip-text text-center text-4xl font-bold text-transparent"
					>
						Other Services
					</h2>
					<div class="grid gap-8 md:grid-cols-3">
						{#each relatedServices as relatedService, i}
							<a
								href="/services/{relatedService.slug}"
								class="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all hover:scale-105"
								in:fly={{ y: 30, delay: i * 100 }}
							>
								<div
									class="absolute inset-0 bg-gradient-to-br {relatedService.gradient} opacity-0 transition-opacity group-hover:opacity-10"
								></div>
								<div class="relative z-10 p-6">
									<div class="mb-4 text-5xl">{relatedService.icon}</div>
									<h3 class="mb-2 text-xl font-bold">{relatedService.title}</h3>
									<p class="line-clamp-2 text-sm text-slate-400">
										{relatedService.shortDescription}
									</p>
									<div class="mt-4 text-sm text-primary-400">
										From {relatedService.pricing.starting}
									</div>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</section>
		{/if}

		<!-- CTA -->
		<section class="px-6 py-20">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
				<p class="mb-8 text-lg text-slate-400">
					Let's discuss your project and create something amazing together
				</p>
				<a
					href="/contact"
					class="inline-block rounded-full bg-gradient-to-r from-primary-600 to-primary-600 px-8 py-4 font-semibold shadow-lg shadow-primary-500/50 transition-transform hover:scale-105"
				>
					Start Your Project
				</a>
			</div>
		</section>
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
