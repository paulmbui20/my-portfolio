<script>
	import { onMount } from 'svelte';

	let scrollY = 0;
	let isVisible = false;

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
			isVisible = scrollY > 300;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<button
	on:click={scrollToTop}
	class="fixed right-8 bottom-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black transition-all duration-300 hover:bg-emerald-400 {isVisible
		? 'pointer-events-auto translate-y-0 opacity-100'
		: 'pointer-events-none translate-y-10 opacity-0'}"
	aria-label="Scroll to top"
>
	<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M7 16V4m0 0L3 8m4-4l4 4"
		/>
	</svg>
</button>

<style>
	button {
		box-shadow: 0 10px 40px rgba(16, 185, 129, 0.2);
	}

	button:hover {
		box-shadow: 0 15px 50px rgba(16, 185, 129, 0.4);
	}
</style>
