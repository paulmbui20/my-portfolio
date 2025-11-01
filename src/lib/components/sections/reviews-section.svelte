<script lang="ts">
	import Reviews from './review-slider.svelte';
</script>

<section id="reviews" class="relative bg-black px-6 py-20">
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div class="absolute bottom-0 right-20 h-72 w-72 rounded-full bg-teal-500/5 blur-3xl"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-6xl">
		<!-- Section Header -->
		<div class="mb-16 text-center space-y-4">
			<span class="font-mono text-sm text-emerald-400">TESTIMONIALS</span>
			<h2 class="text-4xl font-bold md:text-5xl">What Clients Say</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-400">
				Don't just take my word for it - hear from clients who've experienced exceptional results
			</p>
		</div>

		<!-- Reviews Marquee -->
		<Reviews />
	</div>
</section>