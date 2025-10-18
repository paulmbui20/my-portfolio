<script>
	export let reviews = [
		{
			message: 'Paul delivered a beautiful, accessible product that increased conversions.',
			name: 'Anna Johnson',
			role: 'Head of Product',
			organization: 'Acme Co.'
		},
		{
			message:
				'Fast, communicative, and detail-oriented — our users noticed the improvement immediately.',
			name: 'Brian Lee',
			role: 'CTO',
			organization: 'GrowthLabs'
		},
		{
			message: 'Helped us optimize SEO and performance. Traffic improved within weeks.',
			name: 'Sofia Patel',
			role: 'Marketing Lead',
			organization: 'BrightWave'
		}
	];

	// duplicate content for continuous scroll effect
	let looped = [...reviews, ...reviews];
</script>

<div class="overflow-hidden">
	<!-- marquee container -->
	<div class="relative">
		<div class="marquee will-change-transform">
			{#each looped as r, i}
				<article
					class="mr-8 inline-block max-w-xs min-w-[320px] rounded-xl border border-emerald-500/10 bg-black/30 p-6"
				>
					<p class="text-sm text-gray-200 italic">“{r.message}”</p>
					<div class="mt-4">
						<p class="text-sm font-semibold text-emerald-400">{r.name}</p>
						<p class="text-xs text-gray-400">
							{r.role} — <span class="text-gray-300">{r.organization}</span>
						</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</div>

<style>
	/* marquee effect: translateX from 0 to -50% (looped list) */
	.marquee {
		display: flex;
		align-items: center;
		gap: 1rem;
		animation: marquee 20s linear infinite;
	}

	.marquee:hover {
		animation-play-state: paused;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		} /* because content duplicated */
	}

	/* ensure the marquee will not wrap and items flow horizontally */
	.marquee > * {
		flex-shrink: 0;
	}
</style>
