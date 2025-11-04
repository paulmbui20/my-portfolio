<script context="module">
	export const faqData = [
		{
			id: 1,
			question: 'What web development technologies do you specialize in?',
			answer:
				'As a professional web developer in Kenya, I specialize in modern full-stack development with SvelteKit, Django, and FastAPI. I work with databases like PostgreSQL, MySQL and Redis, and deploy on cloud platforms like AWS, Render, Railway, and Vercel. My expertise covers both frontend and backend development for businesses across Kenya and internationally.'
		},
		{
			id: 2,
			question: 'How long does a typical web development project take?',
			answer:
				'Project timelines vary based on scope and complexity. Simple websites take 1-4 weeks, while complex web applications may take 2-6 months. I provide detailed estimates and project timelines after an initial consultation to understand your specific business needs and requirements.'
		},
		{
			id: 3,
			question: 'Do you offer ongoing maintenance and support for websites?',
			answer:
				'Yes! I provide comprehensive maintenance packages including bug fixes, security updates, performance optimization, and feature additions. I also offer support for scaling your web application as your business grows, ensuring your online presence remains competitive in the Kenyan market.'
		},
		{
			id: 4,
			question: 'What is your web development process?',
			answer:
				'I follow an agile methodology with clear communication throughout. This includes a discovery phase to understand your business goals, UI/UX design, iterative development sprints with regular client check-ins, thorough testing, SEO optimization, and seamless deployment with post-launch support.'
		},
		{
			id: 5,
			question: 'Can you work with existing codebases and legacy systems?',
			answer:
				'Absolutely! I often integrate with existing projects, refactor and improve legacy codebases, or migrate outdated systems to modern technologies. Code quality, maintainability, and documentation are always top priorities to ensure your web application remains scalable and easy to update.'
		},
		{
			id: 6,
			question: 'What is your pricing model for web development services?',
			answer:
				'I offer flexible pricing based on project scope and your business needs. Options include fixed-price projects for defined scopes, hourly rates for ongoing maintenance and smaller tasks, or retainer agreements for continuous development and support. Contact me for a personalized quote tailored to your requirements.'
		}
	];
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let expandedId: number | null = null;
	let visibleItems = new Set();

	function toggleFaq(id: number) {
		expandedId = expandedId === id ? null : id;
	}

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					visibleItems.add((entry.target as HTMLElement).dataset.id);
					visibleItems = visibleItems;
				}
			});
		});

		document.querySelectorAll('[data-observe]').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<section class="relative bg-black px-6 py-20">
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div class="absolute top-1/4 right-10 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl"></div>
		<div class="absolute bottom-1/4 left-10 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl">
		<!-- Header -->
		<div class="mb-16 space-y-4 text-center">
			<span class="font-mono text-sm text-primary-400">FREQUENTLY ASKED QUESTIONS</span>
			<h2 class="text-4xl font-bold md:text-5xl">Common Questions</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-400">
				Everything you need to know about working with a professional web developer in Kenya
			</p>
		</div>

		<!-- FAQ Items with Enhanced Cards -->
		<div class="space-y-4">
			{#each faqData as faq (faq.id)}
				<div
					data-id={faq.id}
					data-observe
					class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 {visibleItems.has(
						String(faq.id)
					)
						? 'translate-y-0 opacity-100'
						: 'translate-y-4 opacity-0'}"
					style="transition: all 0.5s ease-out {faq.id * 80}ms"
				>
					<!-- Gradient Overlay -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					></div>

					<!-- Question Button -->
					<button
						on:click={() => toggleFaq(faq.id)}
						class="relative flex w-full items-center justify-between gap-4 p-6 text-left transition-all"
					>
						<span
							class="flex-1 text-lg font-semibold transition-colors duration-300 group-hover:text-primary-400"
						>
							{faq.question}
						</span>
						
						<!-- Enhanced Icon -->
						<div class="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary-500/30 bg-primary-500/10 transition-all duration-300 group-hover:border-primary-400 group-hover:bg-primary-500/20">
							<svg
								class="h-5 w-5 text-primary-400 transition-transform duration-300 {expandedId === faq.id
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</button>

					<!-- Answer -->
					{#if expandedId === faq.id}
						<div
							class="relative overflow-hidden border-t border-primary-500/20 bg-gradient-to-br from-primary-500/5 to-transparent"
							style="animation: slideDown 0.3s ease-out;"
						>
							<div class="p-6 pt-4">
								<p class="leading-relaxed text-gray-300">
									{faq.answer}
								</p>
							</div>
						</div>
					{/if}

					<!-- Shine Effect -->
					<div
						class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full"
					></div>

					<!-- Corner Glow -->
					<div
						class="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-primary-500/10 blur-xl transition-all duration-500 group-hover:translate-x-5 group-hover:-translate-y-5"
					></div>
				</div>
			{/each}
		</div>

		<!-- Contact CTA -->
		<div class="mt-12 text-center">
			<p class="mb-4 text-gray-400">Still have questions?</p>
			<a
				href="/contact"
				class="group inline-flex items-center gap-2 rounded-xl border-2 border-primary-500 bg-transparent px-6 py-3 font-semibold text-primary-400 transition-all duration-300 hover:bg-primary-500/10"
			>
				<span>Get in Touch</span>
				<svg class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	@keyframes slideDown {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 500px;
		}
	}
</style>