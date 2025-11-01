<!-- src/lib/components/Reviews.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { getFeaturedReviews } from '$lib/data/reviews';
	import type { Review } from '$lib/data/reviews';

	let reviews: Review[] = [];
	let looped: Review[] = [];
	let loading = true;

	onMount(async () => {
		// Fetch reviews from PocketBase
		reviews = await getFeaturedReviews();
		
		// Duplicate content for continuous scroll effect
		if (reviews.length > 0) {
			looped = [...reviews, ...reviews];
		}
		
		loading = false;
	});
</script>

{#if loading}
	<div class="flex justify-center py-12">
		<div class="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
	</div>
{:else if reviews.length === 0}
	<div class="py-12 text-center">
		<p class="text-gray-400">No reviews available at the moment.</p>
	</div>
{:else}
	<div class="overflow-hidden">
		<!-- marquee container -->
		<div class="relative">
			<div class="marquee will-change-transform">
				{#each looped as review}
					<article
						class="mr-8 inline-block max-w-xs min-w-[320px] rounded-xl border border-emerald-500/10 bg-black/30 p-6"
					>
						<p class="text-sm text-gray-200 italic">"{review.message}"</p>
						<div class="mt-4">
							<p class="text-sm font-semibold text-emerald-400">{review.name}</p>
							<p class="text-xs text-gray-400">
								{review.role} — <span class="text-gray-300">{review.organization}</span>
							</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
{/if}

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