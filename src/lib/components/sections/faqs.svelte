<script context="module">
	export const faqData = [
		{
			id: 1,
			question: 'What technologies do you specialize in?',
			answer:
				'I specialize in modern full-stack development with React, SvelteKit, Node.js, and Python. I work with databases like PostgreSQL and MongoDB, and deploy on cloud platforms like AWS and Firebase.'
		},
		{
			id: 2,
			question: 'How long does a typical project take?',
			answer:
				'Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications may take 2-6 months. I provide detailed estimates after an initial consultation.'
		},
		{
			id: 3,
			question: 'Do you offer ongoing maintenance and support?',
			answer:
				'Yes! I provide maintenance packages including bug fixes, updates, and feature additions. I can also help with scaling as your business grows.'
		},
		{
			id: 4,
			question: 'What is your development process?',
			answer:
				'I follow agile methodology with clear communication. This includes discovery phase, design, development sprints, testing, and deployment with regular client check-ins.'
		},
		{
			id: 5,
			question: 'Can you work with my existing codebase?',
			answer:
				'Absolutely! I often integrate with existing projects, improve codebases, or migrate legacy systems to modern technologies. Code quality and maintainability are always priorities.'
		},
		{
			id: 6,
			question: 'What is your pricing model?',
			answer:
				'I offer flexible pricing based on project scope. Options include fixed-price projects, hourly rates for maintenance, or retainer agreements for ongoing support.'
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
		<div class="absolute top-1/4 right-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl">
		<!-- Header -->
		<div class="mb-16 space-y-4">
			<span class="font-mono text-sm text-emerald-400">FREQUENTLY ASKED</span>
			<h2 class="text-4xl font-bold md:text-5xl">Questions & Answers</h2>
			<p class="text-lg text-gray-400">
				Find answers to common questions about my services and working process
			</p>
		</div>

		<!-- FAQ Items -->
		<div class="space-y-4">
			{#each faqData as faq (faq.id)}
				<div
					data-id={faq.id}
					data-observe
					class="group overflow-hidden rounded-lg border border-emerald-500/20 transition-all duration-300 hover:border-emerald-500/50 {visibleItems.has(
						String(faq.id)
					)
						? 'translate-y-0 opacity-100'
						: 'translate-y-4 opacity-0'}"
					style="transition: all 0.5s ease-out 0.{faq.id * 50}ms"
				>
					<button
						on:click={() => toggleFaq(faq.id)}
						class="flex w-full items-center justify-between bg-gradient-to-r from-gray-900/50 to-black/50 px-6 py-4 transition-all hover:from-emerald-500/5 hover:to-black/50"
					>
						<span
							class="text-left text-lg font-semibold transition-colors group-hover:text-emerald-400"
						>
							{faq.question}
						</span>
						<span
							class="text-emerald-400 transition-transform duration-300 {expandedId === faq.id
								? 'rotate-180'
								: ''}"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 14l-7 7m0 0l-7-7m7 7V3"
								/>
							</svg>
						</span>
					</button>

					{#if expandedId === faq.id}
						<div
							class="animate-in fade-in border-t border-emerald-500/20 bg-black/50 px-6 py-4 text-gray-400 duration-300"
						>
							{faq.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Final CTA -->
		<div
			class="mt-16 rounded-lg border border-emerald-500/30 bg-gradient-to-r from-emerald-500/5 to-black/50 p-8 text-center"
		>
			<p class="mb-4 text-gray-400">Still have questions?</p>
			<a
				href="mailto:your.email@example.com"
				class="inline-flex items-center gap-2 font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
			>
				Get in touch with me
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 7l5 5m0 0l-5 5m5-5H6"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>
