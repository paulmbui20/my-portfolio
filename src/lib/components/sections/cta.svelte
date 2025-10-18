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
	<!-- Background elements -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
		/>
		<div
			class="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl"
		/>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
		<div class="space-y-4">
			<span class="font-mono text-sm text-emerald-400">READY TO START?</span>
			<h2 class="text-4xl font-bold md:text-5xl">
				Let's Build Something
				<span
					class="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent"
				>
					Amazing Together
				</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-400">
				Whether you have a project in mind or just want to chat about technology, I'd love to hear
				from you.
			</p>
		</div>

		<!-- Email subscription -->
		<form on:submit={handleSubmit} class="mx-auto flex max-w-md gap-3">
			<input
				type="email"
				placeholder="your@email.com"
				bind:value={email}
				required
				class="flex-1 rounded-lg border border-emerald-500/30 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-emerald-400 focus:bg-white/10 focus:outline-none"
			/>
			<button
				type="submit"
				class="rounded-lg bg-emerald-500 px-6 py-3 font-semibold whitespace-nowrap text-black transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50"
			>
				{submitted ? '✓ Sent!' : 'Send'}
			</button>
		</form>

		<!-- CTA Buttons -->
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="mailto:your.email@example.com"
				class="rounded-lg bg-emerald-500 px-8 py-3 font-semibold text-black transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50"
			>
				Email Me
			</a>
			<a
				href="#"
				class="rounded-lg border border-emerald-500 px-8 py-3 font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-500/10"
			>
				View Resume
			</a>
		</div>

		<!-- Social Links -->
		<div class="flex justify-center gap-6 pt-8">
			<a href="#" class="text-gray-400 transition-colors hover:scale-110 hover:text-emerald-400">
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/>
				</svg>
			</a>
			<a href="#" class="text-gray-400 transition-colors hover:scale-110 hover:text-emerald-400">
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
					/>
				</svg>
			</a>
			<a href="#" class="text-gray-400 transition-colors hover:scale-110 hover:text-emerald-400">
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>
