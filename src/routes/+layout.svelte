<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/ui/navbar.svelte';
	import Footer from '$lib/components/ui/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Paul Mbui - My Portfolio</title>
	<meta name="description" content="Paul Mbui - My Portfolio" />
</svelte:head>

<body>
	<section>
		<Navbar />
	</section>
	<main>
		{@render children?.()}
	</main>
	<footer>
		<Footer />
	</footer>
</body>
