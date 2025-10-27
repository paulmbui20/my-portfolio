<script lang="ts">
	import { onMount } from 'svelte';
	// keep your existing scrollY logic
	let scrollY = 0;
	onMount(() => {
		const handleScroll = () => (scrollY = window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// TYPING animation config
	const roles = ['Full Stack Developer', 'Web Developer', 'SEO Expert', 'Backend Developer'];

	// typing state
	let typed = '';
	let typingIndex = 0; // index in roles
	let charIndex = 0;
	let typingForward = true;
	let typingInterval: ReturnType<typeof setInterval>;

	// Start animation on mount; keep content available for bots using sr-only
	onMount(() => {
		// small delay so user sees initial state
		typingInterval = setInterval(() => {
			const current = roles[typingIndex];
			if (typingForward) {
				// type
				charIndex++;
				typed = current.slice(0, charIndex);
				if (charIndex >= current.length) {
					typingForward = false;
					// hold before erasing
					setTimeout(() => {}, 700);
				}
			} else {
				// erase
				charIndex--;
				typed = current.slice(0, charIndex);
				if (charIndex <= 0) {
					typingForward = true;
					typingIndex = (typingIndex + 1) % roles.length;
				}
			}
		}, 120);

		return () => clearInterval(typingInterval);
	});
</script>

<svelte:window bind:scrollY />

<section class="relative flex items-center justify-center overflow-hidden bg-black px-6 py-6">
	<!-- Gradient orb background (kept) -->
	<div
		class="pointer-events-none absolute inset-0 overflow-hidden"
		style="transform: translateY({scrollY * 0.5}px)"
	>
		<div class="absolute top-20 right-10 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl"></div>
		<div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary-500/5 blur-3xl"></div>
	</div>

	<!-- HERO GRID: Name full-width on large screens, content rows beneath -->
	<div class="relative z-10 mx-auto max-w-6xl">
		<!-- BIG NAME (spans full width on large screens) -->
		<header class="mb-12 text-center md:text-left">
			<h1
				class="text-4xl leading-tight font-extrabold tracking-tight break-words md:text-[6.5rem] md:leading-[1]"
			>
				<!-- Static name for SEO/bots: visible in DOM and visually visible -->
				<span class="">PAUL MBUI</span>

				<!-- hyphen + typed titles (visual); aria-hidden so bots don't rely on it -->
				<span class="mt-2 inline-block text-xl font-semibold md:text-2xl">
					<span class="text-gray-300">-</span>
					<!-- visual typed text -->
					<span aria-hidden="true" class="ml-3 text-primary-400"
						>{typed}<span class="blinker ml-1 inline-block">▍</span></span
					>

					<!-- exhaustive list for crawlers/AI/social bots (visually-hidden but in DOM) -->
					<span class="sr-only">
						- Full Stack Developer, Web Developer, SEO Expert, UI Engineer, Product-focused Engineer
					</span>
				</span>
			</h1>
		</header>

		<!-- hero body: LEFT = image, RIGHT = subheading/desc/buttons -->
		<div class="grid items-center gap-8 md:grid-cols-2">
			<!-- LEFT: image card -->
			<div class="hidden justify-center md:flex md:justify-start">
				<div
					class="relative h-96 w-80 overflow-hidden rounded-3xl border border-primary-500/20 bg-gray-900 shadow-xl shadow-primary-500/10"
				>
					<!-- supply your image path -->
					<img src="/images/me.webp" alt="Paul Mbui" class="h-full w-full object-cover" />
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
					/>

					<!-- floating badge -->
					<div
						class="absolute right-3 bottom-3 rounded-md border border-primary-500/40 bg-black/60 px-3 py-2 backdrop-blur-sm"
					>
						<p class="text-xs font-semibold text-primary-400">✓ Available for Work</p>
					</div>
				</div>
			</div>

			<!-- RIGHT: subheading + description + CTAs -->
			<div class="space-y-6">
				<p class="text-sm font-semibold tracking-wider text-primary-400 uppercase">
					Product-focused Engineer
				</p>

				<h2 class="text-2xl font-bold text-white md:text-3xl">
					I build production-ready web apps with usability and performance in mind
				</h2>

				<p class="max-w-xl text-gray-400">
					I lead frontend and full-stack implementations for startups and teams — shipping scalable
					interfaces, improving conversions, and optimizing for SEO and performance. Available for
					contract and full-time roles.
				</p>

				<div class="flex flex-wrap gap-4">
					<a
						href="/contact"
						class="inline-block rounded-lg bg-primary-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/50"
					>
						Start a Project
					</a>

					<a
						href="#projects"
						class="inline-block rounded-lg border border-primary-500 px-6 py-3 font-semibold text-primary-400 transition-all duration-300 hover:bg-primary-500/10"
					>
						View Portfolio
					</a>
				</div>

				<!-- small metrics row (optional) -->
				<div class="flex gap-8 pt-2 text-sm text-gray-400">
					<div>
						<p class="text-lg font-bold text-primary-400">10+</p>
						<p class="text-xs">Projects</p>
					</div>
					<div>
						<p class="text-lg font-bold text-primary-400">5+</p>
						<p class="text-xs">Clients</p>
					</div>
					<div>
						<p class="text-lg font-bold text-primary-400">3+</p>
						<p class="text-xs">Years</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<style>
		/* small blinker style for typed cursor */
		.blinker {
			animation: blink 1.4s steps(2, start) infinite;
		}
		@keyframes blink {
			to {
				visibility: hidden;
			}
		}

		/* screen-reader only utility (if you don't already have one) */
		.sr-only {
			position: absolute !important;
			height: 1px;
			width: 1px;
			overflow: hidden;
			clip: rect(1px, 1px, 1px, 1px);
			white-space: nowrap;
		}
	</style>
</section>
