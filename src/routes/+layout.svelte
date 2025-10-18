<script>
	import Footer from '$lib/components/ui/footer.svelte';
	import Navbar from '$lib/components/ui/navbar.svelte';
	import ScrollToTop from '$lib/components/ui/scroll-to-top.svelte';
	import '../app.css';
</script>

<div class="min-h-screen bg-black text-white transition-colors duration-300">
	<Navbar />
	<main>
		<slot />
	</main>
	<ScrollToTop />
	<footer class="relative border-t border-emerald-500/20 bg-black/50 px-6 py-8">
		<Footer />
	</footer>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
