<script>
	import Hero from '$lib/components/sections/hero.svelte';
	import Services from '$lib/components/sections/services.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import CTA from '$lib/components/sections/cta.svelte';
	import FAQs from '$lib/components/sections/faqs.svelte';
	import ReviewSection from '$lib/components/sections/reviews-section.svelte';
</script>

<svelte:head>
	<title>Paul Mbui - Web Developer in Kenya | Full Stack Developer | SvelteKit & Django Expert</title>
	<meta
		name="description"
		content="Professional web developer in Kenya specializing in SvelteKit, Django, and full-stack development. Delivering scalable web applications for businesses in Mombasa and across Kenya. Contact for web development services."
	/>
	<meta name="keywords" content="web developer Kenya, full stack developer Mombasa, SvelteKit developer Kenya, Django developer, web development services Kenya, frontend developer Kenya, backend developer, web designer Kenya" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="author" content="Paul Mbui" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://paulmbui.com/" />
	<meta property="og:title" content="Paul Mbui - Professional Web Developer in Kenya" />
	<meta property="og:description" content="Expert full-stack web developer in Kenya. Specializing in modern web applications with SvelteKit, Django, and cutting-edge technologies." />
	<meta property="og:image" content="https://paulmbui.com/images/og-image.jpg" />
	<meta property="og:locale" content="en_KE" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://paulmbui.com/" />
	<meta property="twitter:title" content="Paul Mbui - Web Developer in Kenya" />
	<meta property="twitter:description" content="Professional full-stack developer delivering exceptional web solutions in Kenya and globally." />
	<meta property="twitter:image" content="https://paulmbui.com/images/twitter-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://paulmbui.com/" />

	<!-- Additional SEO -->
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="geo.region" content="KE-110" />
<meta name="geo.placename" content="Mombasa" />
<meta name="geo.position" content="-4.043477;39.668206" />
<meta name="ICBM" content="-4.043477, 39.668206" />

	<!-- Schema.org structured data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			"name": "Paul Mbui - Web Developer",
			"image": "https://paulmbui.com/images/me.webp",
			"@id": "https://paulmbui.com",
			"url": "https://paulmbui.com",
			"telephone": "+254746544646",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "",
				"addressLocality": "Mombasa",
				"addressRegion": "Mombasa County",
				"postalCode": "",
				"addressCountry": "KE"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": -1.286389,
				"longitude": 36.817223
			},
			"openingHoursSpecification": {
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday"
				],
				"opens": "08:00",
				"closes": "17:00"
			},
			"sameAs": [
				"https://github.com/paulmbui20",
				"https://linkedin.com/in/paul-mbui"
			],
			"priceRange": "$$"
		}
	</script>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Paul Mbui",
			"url": "https://paulmbui.com",
			"image": "https://paulmbui.com/images/me.webp",
			"sameAs": [
				"https://github.com/paulmbui20",
				"https://linkedin.com/in/paul-mbui",
				"https://wa.me/254746544646"
			],
			"jobTitle": "Full Stack Web Developer",
			"worksFor": {
				"@type": "Organization",
				"name": "Freelance"
			},
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Mombasa",
				"addressCountry": "Kenya"
			},
			"knowsAbout": [
				"Web Development",
				"SvelteKit",
				"Django",
				"Full Stack Development",
				"TypeScript",
				"Python",
				"Database Design",
				"Cloud Computing",
				"SEO Optimization"
			]
		}
	</script>
</svelte:head>

<!-- Semantic HTML structure for better SEO -->
<main>
	<Hero />
	<ReviewSection />
	<Projects />
	<Services />
	<FAQs />
	<CTA />
</main>