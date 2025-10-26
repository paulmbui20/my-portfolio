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
	<div class="flex min-h-screen items-center justify-center bg-black px-6 text-white">
		<div class="text-center">
			<div class="mb-6 text-8xl">😕</div>
			<h1 class="mb-4 text-4xl font-bold">Service Not Found</h1>
			<p class="mb-8 text-secondary-400">The service you're looking for doesn't exist.</p>
			<a
				href="/services"
				class="inline-block rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 font-semibold shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50"
			>
				View All Services
			</a>
		</div>
	</div>
{:else}
	<div class="min-h-screen bg-black text-white">
		<!-- Hero Section - Above the Fold -->
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
							href="/services"
							class="mb-6 inline-flex items-center gap-2 text-primary-400 transition-all duration-300 hover:gap-3 hover:text-primary-300"
						>
							<span class="transition-transform group-hover:-translate-x-1">←</span> Back to Services
						</a>

						<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
							<!-- Left: Content -->
							<div>
								<!-- Service Icon -->
								<div
									class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-500/10 text-5xl transition-all duration-500 hover:scale-110 hover:bg-primary-500/20"
								>
									{service.icon}
								</div>

								<h1
									class="mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
								>
									{service.title}
								</h1>
								<p class="mb-6 text-lg text-secondary-400 md:text-xl">
									{service.shortDescription}
								</p>

								<!-- Service Meta -->
								<div class="mb-6 flex flex-wrap gap-4 text-sm">
									<div
										class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2"
									>
										<span class="text-secondary-500">Starting Price:</span>
										<span class="font-semibold text-primary-400">{service.pricing.starting}</span>
									</div>
									<div
										class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2"
									>
										<span class="text-secondary-500">Timeline:</span>
										<span class="font-semibold text-accent-400">{service.pricing.timeline}</span>
									</div>
								</div>

								<!-- CTA Button -->
								<a
									href="/contact"
									class="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50"
								>
									<span class="relative z-10">Request Quote</span>
									<span
										class="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
										>→</span
									>
									<div
										class="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-500 to-primary-500 transition-transform duration-300 group-hover:translate-x-0"
									></div>
								</a>
							</div>

							<!-- Right: Pricing Card -->
							<div in:fly={{ x: 50, delay: 200 }}>
								<div
									class="rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent p-8 shadow-2xl backdrop-blur-sm"
								>
									<h3 class="mb-2 text-xl font-bold text-white">Investment</h3>
									<div class="mb-2 text-5xl font-bold text-primary-400">
										{service.pricing.starting}
									</div>
									<div class="mb-6 text-sm text-secondary-400">Starting price</div>

									<div class="mb-6 space-y-3">
										<div class="flex items-center gap-3 text-sm">
											<span class="text-2xl">⏱️</span>
											<div>
												<div class="text-secondary-500">Typical Timeline</div>
												<div class="font-semibold text-white">{service.pricing.timeline}</div>
											</div>
										</div>
										<div class="flex items-center gap-3 text-sm">
											<span class="text-2xl">✓</span>
											<div>
												<div class="text-secondary-500">Deliverables</div>
												<div class="font-semibold text-white">Full source code & documentation</div>
											</div>
										</div>
									</div>

									<a
										href="/contact"
										class="block rounded-lg bg-white/10 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-white/20"
									>
										Get Started
									</a>
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
						<!-- Overview -->
						<div in:fly={{ y: 30, delay: 200 }}>
							<h2 class="mb-6 text-3xl font-bold text-primary-400">Service Overview</h2>
							<p class="text-lg leading-relaxed text-secondary-300">
								{service.description}
							</p>
						</div>

						<!-- Features -->
						<div in:fly={{ y: 30, delay: 300 }}>
							<h2 class="mb-6 text-3xl font-bold text-primary-400">What's Included</h2>
							<div class="grid gap-3 sm:grid-cols-2">
								{#each service.features as feature, i}
									<div
										class="group flex items-start gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-4 transition-all duration-300 hover:-translate-x-1 hover:border-primary-500/50 hover:bg-white/[0.05]"
									>
										<div
											class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-sm transition-all duration-300 group-hover:bg-primary-500/30"
										>
											✓
										</div>
										<p class="text-secondary-300">{feature}</p>
									</div>
								{/each}
							</div>
						</div>

						<!-- Process -->
						<div in:fly={{ y: 30, delay: 400 }}>
							<h2 class="mb-6 text-3xl font-bold text-primary-400">My Process</h2>
							<div class="space-y-4">
								{#each service.process as step, i}
									<div class="group flex items-start gap-4">
										<div
											class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-lg font-bold text-white shadow-lg shadow-primary-500/30"
										>
											{i + 1}
										</div>
										<div
											class="flex-1 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 transition-all duration-300 hover:border-primary-500/50"
										>
											<h3 class="mb-2 text-xl font-semibold text-white">{step.step}</h3>
											<p class="text-secondary-400">{step.description}</p>
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
										class="group rounded-xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20"
									>
										<div
											class="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110"
										>
											{i === 0 ? '🎯' : i === 1 ? '📈' : i === 2 ? '⚡' : i === 3 ? '💼' : '✨'}
										</div>
										<p class="text-secondary-300">{benefit}</p>
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
										<div
											class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 transition-all duration-300 hover:border-primary-500/50"
										>
											<div class="mb-4 text-5xl">💬</div>
											<p class="mb-6 text-lg text-secondary-300 italic">"{testimonial.text}"</p>
											<div>
												<div class="text-lg font-semibold text-white">{testimonial.name}</div>
												<div class="text-secondary-400">{testimonial.role}</div>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					</div>

					<!-- Sidebar - Both Sidebars Sticky -->
					<div class="space-y-6">
						<!-- Technologies -->
						<div
							class="sticky top-24 rounded-xl border border-white/10 bg-black p-6 shadow-lg"
							in:fly={{ x: 50, delay: 300 }}
						>
							<h3 class="mb-4 text-xl font-bold text-white">Technologies Used</h3>
							<div class="space-y-2">
								{#each service.technologies as tech}
									<div
										class="rounded-lg border border-white/10 bg-gradient-to-br from-primary-500/5 to-transparent px-4 py-2.5 text-sm font-medium text-primary-300 transition-all duration-300 hover:border-primary-500/30 hover:bg-primary-500/10"
									>
										{tech}
									</div>
								{/each}
							</div>
						</div>

						<!-- Quick Contact -->
						<div
							class="sticky top-[32rem] rounded-xl border border-white/10 bg-black p-6 shadow-lg"
							in:fly={{ x: 50, delay: 500 }}
						>
							<h3 class="mb-4 text-xl font-bold text-white">Have Questions?</h3>
							<p class="mb-4 text-sm text-secondary-400">
								I'm here to help! Get in touch to discuss your specific needs.
							</p>
							<div class="space-y-3">
								<a
									href="mailto:hello@paulmbui.co.ke"
									class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3 text-sm text-primary-400 transition-all duration-300 hover:border-primary-500/50 hover:bg-primary-500/10"
								>
									<span class="text-xl">📧</span>
									<span>hello@paulmbui.co.ke</span>
								</a>
								<a
									href="tel:+254746544646"
									class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3 text-sm text-primary-400 transition-all duration-300 hover:border-primary-500/50 hover:bg-primary-500/10"
								>
									<span class="text-xl">📱</span>
									<span>+254 746 544 646</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Related Services -->
		{#if relatedServices.length > 0}
			<section class="border-t border-white/5 px-6 py-20">
				<div class="mx-auto max-w-6xl">
					<h2
						class="mb-12 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center text-4xl font-bold text-transparent"
					>
						Other Services
					</h2>
					<div class="grid gap-8 md:grid-cols-3">
						{#each relatedServices as relatedService, i}
							<a
								href="/services/{relatedService.slug}"
								class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20"
								in:fly={{ y: 30, delay: i * 100 }}
							>
								<div
									class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								></div>
								<div class="relative z-10">
									<div
										class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-500/10 text-4xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary-500/20"
									>
										{relatedService.icon}
									</div>
									<h3 class="mb-2 text-xl font-bold text-white group-hover:text-primary-400">
										{relatedService.title}
									</h3>
									<p class="mb-4 line-clamp-2 text-sm text-secondary-400">
										{relatedService.shortDescription}
									</p>
									<div class="text-sm font-semibold text-primary-400">
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
				<h2 class="mb-6 text-4xl font-bold text-white">Ready to Get Started?</h2>
				<p class="mb-8 text-lg text-secondary-400">
					Let's discuss your project and create something amazing together
				</p>
				<a
					href="/contact"
					class="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50"
				>
					<span class="relative z-10">Start Your Project</span>
					<div
						class="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-500 to-primary-500 transition-transform duration-300 group-hover:translate-x-0"
					></div>
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
