<script>
	import Hero from '$lib/components/sections/hero.svelte';
	import Services from '$lib/components/sections/services.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import CTA from '$lib/components/sections/cta.svelte';
	import FAQs from '$lib/components/sections/faqs.svelte';
	import ReviewSlider from '$lib/components/sections/review-slider.svelte';
</script>

<svelte:head>
	<title>Paul Mbui - Full Stack Developer</title>
	<meta
		name="description"
		content="Full-stack developer specializing in React, SvelteKit, and modern web technologies."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:title" content="Paul Mbui - Full Stack Developer" />
	<meta
		property="og:description"
		content="Crafting digital experiences with modern technologies."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<Hero />
<ReviewSlider />
<Projects />
<Services />
<FAQs />
<CTA />
