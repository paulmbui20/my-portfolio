<script lang="ts">
	import { onMount } from 'svelte';
	
	let scrollY = 0;
	onMount(() => {
		const handleScroll = () => (scrollY = window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// TYPING animation config with SEO keywords
	const roles = [
		'Full Stack Developer',
		'Web Developer in Kenya',
		'SvelteKit Specialist',
		'Backend Engineer',
		'Django Developer'
	];

	// typing state
	let typed = '';
	let typingIndex = 0;
	let charIndex = 0;
	let typingForward = true;
	let typingInterval: ReturnType<typeof setInterval>;

	onMount(() => {
		typingInterval = setInterval(() => {
			const current = roles[typingIndex];
			if (typingForward) {
				charIndex++;
				typed = current.slice(0, charIndex);
				if (charIndex >= current.length) {
					typingForward = false;
					setTimeout(() => {}, 700);
				}
			} else {
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

<section class="relative flex items-center justify-center overflow-hidden bg-black px-6 py-8">
	<!-- Enhanced Gradient Background -->
	<div
		class="pointer-events-none absolute inset-0 overflow-hidden"
		style="transform: translateY({scrollY * 0.5}px)"
	>
		<div class="absolute top-20 right-10 h-96 w-96 animate-pulse rounded-full bg-primary-500/10 blur-3xl"></div>
		<div class="absolute bottom-20 left-10 h-96 w-96 animate-pulse rounded-full bg-teal-500/5 blur-3xl" style="animation-delay: 1s;"></div>
		<div class="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/5 blur-3xl"></div>
	</div>

	<!-- Floating particles effect -->
	<div class="pointer-events-none absolute inset-0">
		{#each Array(20) as _, i}
			<div
				class="absolute h-1 w-1 rounded-full bg-primary-400/30"
				style="
					left: {Math.random() * 100}%;
					top: {Math.random() * 100}%;
					animation: float {15 + Math.random() * 10}s infinite ease-in-out;
					animation-delay: {Math.random() * 5}s;
				"
			></div>
		{/each}
	</div>

	<div class="relative z-10 mx-auto max-w-6xl">
		<!-- Main Name Header -->
		<header class="mb-8 text-center md:text-left">
			<h1
				class="group text-4xl font-extrabold leading-tight tracking-tight break-words md:text-[6.5rem] md:leading-[1]"
			>
				<!-- Animated gradient text -->
				<span class="inline-block bg-gradient-to-r from-white via-primary-400 to-white bg-clip-text text-transparent transition-all duration-500 group-hover:from-primary-400 group-hover:via-white group-hover:to-primary-400">
					PAUL MBUI
				</span>

				<!-- Typed roles with SEO keywords -->
				<span class="mt-4  text-xl font-semibold md:text-2xl">
					<span class="text-gray-400">-</span>
					<span aria-hidden="true" class="ml-3 text-primary-400">
						{typed}<span class="blinker ml-1 inline-block">▍</span>
					</span>

					<span class="sr-only">
						- Full Stack Developer, Web Developer in Kenya, SvelteKit Specialist, Django Developer, Backend Engineer, Frontend Developer Kenya, Nairobi Web Developer
					</span>
				</span>
			</h1>
		</header>

		<!-- Hero Content Grid -->
		<div class="grid items-center gap-12 md:grid-cols-2">
			<!-- LEFT: Enhanced Image Card -->
			<div class="hidden justify-center md:flex md:justify-start">
				<div class="group relative">
					<!-- Glow effect behind card -->
					<div class="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-500/20 to-teal-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
					
					<!-- Main card -->
					<div
						class="relative h-[450px] w-[350px] overflow-hidden rounded-3xl border border-primary-500/20 bg-gradient-to-br from-gray-900/50 to-black shadow-2xl shadow-primary-500/10 backdrop-blur-sm transition-all duration-500 group-hover:border-primary-500/50 group-hover:shadow-primary-500/20"
					>
						<img 
							src="/images/me.webp" 
							alt="Paul Mbui - Professional Web Developer in Kenya" 
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
						/>
						
						<!-- Gradient overlay -->
						<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

						<!-- Floating badge -->
						<div
							class="absolute right-4 bottom-4 rounded-xl border border-primary-500/40 bg-black/80 px-4 py-2.5 backdrop-blur-md transition-all duration-300 group-hover:border-primary-400 group-hover:bg-primary-500/10"
						>
							<div class="flex items-center gap-2">
								<span class="relative flex h-2 w-2">
									<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
									<span class="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
								</span>
								<p class="text-sm font-semibold text-primary-400">Available for Work</p>
							</div>
						</div>

						<!-- Corner accents -->
						<div class="absolute top-0 right-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-primary-500/20 blur-xl transition-transform duration-500 group-hover:translate-x-5 group-hover:-translate-y-5"></div>
						<div class="absolute bottom-0 left-0 h-20 w-20 -translate-x-10 translate-y-10 rounded-full bg-teal-500/20 blur-xl transition-transform duration-500 group-hover:-translate-x-5 group-hover:translate-y-5"></div>
					</div>
				</div>
			</div>

			<!-- RIGHT: Content -->
			<div class="space-y-6">
				<div class="inline-block">
					<p class="relative text-sm font-bold tracking-wider text-primary-400 uppercase">
						<span class="relative z-10">Offering Premium Web Development Services in Kenya</span> 
						<span class="absolute inset-0 blur-sm bg-primary-400/20"></span>
					</p>
				</div>

				<h2 class="text-3xl font-bold leading-tight text-white md:text-4xl">
					Building <span class="bg-gradient-to-r from-primary-400 to-teal-400 bg-clip-text text-transparent">production-ready</span> web applications
				</h2>

				<p class="max-w-xl text-lg leading-relaxed text-gray-300">
Professional full-stack web developer from Kenya, building scalable, production-ready applications with SvelteKit, Django, and modern JavaScript for startups and enterprises worldwide.				</p>

				<!-- CTA Buttons -->
				<div class="flex flex-wrap gap-4">
					<a
						href="/contact"
						class="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/50"
					>
						<span class="relative z-10">Start a Project</span>
						<svg class="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
						</svg>
						<div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
					</a>

					<a
						href="#projects"
						class="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border-2 border-primary-500 bg-transparent px-8 py-4 font-semibold text-primary-400 transition-all duration-300 hover:bg-primary-500/10 hover:border-primary-400"
					>
						<span class="relative z-10">View Portfolio</span>
						<svg class="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
						</svg>
					</a>
				</div>

				<!-- Enhanced Metrics -->
				<div class="grid grid-cols-3 gap-6 border-t border-primary-500/20 pt-8">
					<div class="group text-center transition-transform duration-300 hover:scale-110">
						<p class="text-3xl font-bold text-primary-400 transition-colors duration-300 group-hover:text-primary-300">10+</p>
						<p class="mt-1 text-sm text-gray-400">Projects Delivered</p>
					</div>
					<div class="group text-center transition-transform duration-300 hover:scale-110">
						<p class="text-3xl font-bold text-primary-400 transition-colors duration-300 group-hover:text-primary-300">5+</p>
						<p class="mt-1 text-sm text-gray-400">Happy Clients</p>
					</div>
					<div class="group text-center transition-transform duration-300 hover:scale-110">
						<p class="text-3xl font-bold text-primary-400 transition-colors duration-300 group-hover:text-primary-300">3+</p>
						<p class="mt-1 text-sm text-gray-400">Years Experience</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.blinker {
		animation: blink 1.4s steps(2, start) infinite;
	}
	
	@keyframes blink {
		to {
			visibility: hidden;
		}
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0) translateX(0);
		}
		25% {
			transform: translateY(-20px) translateX(10px);
		}
		50% {
			transform: translateY(-10px) translateX(-10px);
		}
		75% {
			transform: translateY(-15px) translateX(5px);
		}
	}

	.sr-only {
		position: absolute !important;
		height: 1px;
		width: 1px;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
		white-space: nowrap;
	}
</style>