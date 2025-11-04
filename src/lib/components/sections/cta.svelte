<script lang="ts">
	let email = '';
	let submitted = false;

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// Replace with your form handler
		console.log('Email submitted:', email);
		submitted = true;
		email = '';
		setTimeout(() => (submitted = false), 3000);
	}
</script>

<section class="relative overflow-hidden bg-black px-6 py-20">
	<!-- Enhanced Background elements -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary-500/10 blur-3xl"
		></div>
		<div
			class="absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/5 blur-3xl"
		></div>
	</div>

	<!-- Animated grid pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-10">
		<div class="h-full w-full" style="
			background-image: 
				linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
				linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
			background-size: 50px 50px;
			animation: gridMove 20s linear infinite;
		"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl">
		<!-- Main CTA Card -->
		<div class="group relative overflow-hidden rounded-3xl border border-primary-500/20 bg-gradient-to-br from-white/[0.05] to-transparent p-12 backdrop-blur-sm transition-all duration-500 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/20">
			
			<!-- Gradient Overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-teal-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			></div>

			<!-- Content -->
			<div class="relative z-10 space-y-8 text-center">
				<!-- Header -->
				<div class="space-y-4">
					<div class="inline-block">
						<span class="relative font-mono text-sm text-primary-400">
							<span class="relative z-10">READY TO START YOUR PROJECT?</span>
							<span class="absolute inset-0 blur-sm bg-primary-400/20"></span>
						</span>
					</div>
					
					<h2 class="text-4xl font-bold leading-tight md:text-5xl">
						Let's Build Something
						<span class="block bg-gradient-to-r from-primary-400 via-teal-400 to-primary-600 bg-clip-text text-transparent">
							Extraordinary Together
						</span>
					</h2>
					
					<p class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
						Whether you need a stunning website, powerful web application, or expert consultation on your digital strategy - I'm here to help transform your vision into reality.
					</p>
				</div>

				<!-- CTA Buttons -->
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="/contact"
						class="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/50"
					>
						<span class="relative z-10">Start Your Project</span>
						<svg class="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
						</svg>
						<div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full"></div>
					</a>
					
					<a
						href="/projects"
						class="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-primary-500 bg-transparent px-8 py-4 font-semibold text-primary-400 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/30"
					>
						<span class="relative z-10">View My Work</span>
						<svg class="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
						</svg>
					</a>
				</div>

				<!-- Divider -->
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-primary-500/20"></div>
					</div>
					<div class="relative flex justify-center">
						<span class="bg-black px-4 text-sm text-gray-500">or connect with me</span>
					</div>
				</div>

				<!-- Enhanced Social Links -->
				<div class="flex justify-center gap-4">
					<!-- GitHub -->
					<a
						title="GitHub - Paul Mbui"
						target="_blank"
						rel="noopener noreferrer nofollow"
						href="https://github.com/paulmbui20"
						class="group/social relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/30"
					>
						<svg class="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover/social:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
						<div class="absolute inset-0 rounded-xl bg-primary-500/20 opacity-0 blur transition-opacity duration-300 group-hover/social:opacity-100"></div>
					</a>

					<!-- LinkedIn -->
					<a
						title="LinkedIn - Paul Mbui"
						target="_blank"
						rel="noopener noreferrer nofollow"
						href="https://linkedin.com/in/paul-mbui"
						class="group/social relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/30"
					>
						<svg class="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover/social:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
						</svg>
						<div class="absolute inset-0 rounded-xl bg-primary-500/20 opacity-0 blur transition-opacity duration-300 group-hover/social:opacity-100"></div>
					</a>

					<!-- WhatsApp -->
					<a
						title="WhatsApp - Paul Mbui"
						target="_blank"
						rel="noopener noreferrer nofollow"
						href="https://wa.me/254746544646"
						class="group/social relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/30"
					>
						<svg class="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover/social:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.075-.149-.672-1.611-.92-2.204-.242-.579-.487-.5-.672-.51-.173-.009-.372-.011-.571-.011-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.472 7.618c-1.885 0-3.754-.506-5.383-1.464l-.385-.228-3.996 1.047 1.066-3.894-.25-.4c-1.036-1.655-1.582-3.561-1.582-5.523 0-5.688 4.632-10.32 10.32-10.32 2.758 0 5.352 1.074 7.303 3.025s3.025 4.545 3.025 7.303c-.001 5.687-4.633 10.324-10.318 10.324z"/>
						</svg>
						<div class="absolute inset-0 rounded-xl bg-primary-500/20 opacity-0 blur transition-opacity duration-300 group-hover/social:opacity-100"></div>
					</a>

					<!-- Email -->
					<a
						title="Email - Paul Mbui"
						href="mailto:hello@paulmbui.co.ke"
						class="group/social relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/30"
					>
						<svg class="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover/social:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
						</svg>
						<div class="absolute inset-0 rounded-xl bg-primary-500/20 opacity-0 blur transition-opacity duration-300 group-hover/social:opacity-100"></div>
					</a>
				</div>

				<!-- Location Badge -->
				<div class="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-300">
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
					</svg>
					<span>Based in Mombasa, Kenya - Serving Clients Worldwide</span>
				</div>
			</div>

			<!-- Decorative corners -->
			<div class="absolute top-0 left-0 h-24 w-24 -translate-x-12 -translate-y-12 rounded-full bg-primary-500/20 blur-2xl transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-6"></div>
			<div class="absolute bottom-0 right-0 h-24 w-24 translate-x-12 translate-y-12 rounded-full bg-teal-500/20 blur-2xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
		</div>
	</div>
</section>

<style>
	@keyframes gridMove {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(50px, 50px);
		}
	}
</style>