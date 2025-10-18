<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';

	let isVisible = false;
	let name = 'Friend';

	onMount(() => {
		isVisible = true;
		name = $page.url.searchParams.get('name') || 'Friend';
	});
</script>

<svelte:head>
	<title>Thank You - Paul Mbui</title>
	<meta
		name="description"
		content="Thank you for contacting Paul Mbui. I'll get back to you soon!"
	/>
</svelte:head>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 text-white"
>
	<!-- Animated Background -->
	<div class="pointer-events-none fixed inset-0 overflow-hidden">
		<div
			class="animate-blob absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-500 opacity-10 mix-blend-multiply blur-3xl filter"
		></div>
		<div
			class="animate-blob animation-delay-2000 absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-pink-500 opacity-10 mix-blend-multiply blur-3xl filter"
		></div>
		<div
			class="animate-blob animation-delay-4000 absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-cyan-500 opacity-10 mix-blend-multiply blur-3xl filter"
		></div>
	</div>

	{#if isVisible}
		<div class="relative z-10 mx-auto max-w-3xl text-center" in:fade={{ duration: 400 }}>
			<!-- Success Animation -->
			<div class="mb-8" in:fly={{ y: -50, delay: 200, duration: 600 }}>
				<div class="relative inline-block">
					<div class="mb-4 animate-bounce text-8xl">✉️</div>
					<div class="absolute -top-4 -right-4 animate-pulse text-5xl">✨</div>
				</div>
			</div>

			<!-- Message -->
			<div in:fly={{ y: 30, delay: 400, duration: 600 }}>
				<h1
					class="mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
				>
					Thank You{name !== 'Friend' ? `, ${name}` : ''}!
				</h1>
				<p class="mb-4 text-xl text-slate-300 md:text-2xl">Your message has been received! 🎉</p>
				<p class="mx-auto mb-12 max-w-2xl text-lg text-slate-400">
					I appreciate you taking the time to reach out. I'll review your message and get back to
					you as soon as possible, usually within 24-48 hours.
				</p>
			</div>

			<!-- What's Next -->
			<div class="mb-12" in:fly={{ y: 30, delay: 600, duration: 600 }}>
				<div
					class="inline-block rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 text-left backdrop-blur-sm"
				>
					<h2 class="mb-4 text-xl font-semibold text-purple-400">What happens next?</h2>
					<ul class="space-y-3 text-slate-300">
						<li class="flex items-start gap-3">
							<span class="text-2xl">📬</span>
							<span>I'll carefully review your message</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-2xl">💭</span>
							<span>Think about how I can best help you</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-2xl">📧</span>
							<span>Send you a personalized response</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- CTA Buttons -->
			<div
				class="flex flex-col justify-center gap-4 sm:flex-row"
				in:fly={{ y: 30, delay: 800, duration: 600 }}
			>
				<a
					href="/"
					class="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold shadow-lg shadow-purple-500/50 transition-transform hover:scale-105"
				>
					Back to Home
				</a>
				<a
					href="/projects"
					class="rounded-full border-2 border-purple-500 px-8 py-4 font-semibold transition-all hover:scale-105 hover:bg-purple-500/10"
				>
					View My Work
				</a>
			</div>

			<!-- Social Follow -->
			<div
				class="mt-16 border-t border-slate-800 pt-8"
				in:fly={{ y: 30, delay: 1000, duration: 600 }}
			>
				<p class="mb-4 text-slate-400">Meanwhile, let's connect on social media!</p>
				<div class="flex justify-center gap-4">
					<a
						href="https://github.com/paulmbui20"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 text-2xl transition-all hover:scale-110 hover:border-purple-500/50"
					>
						💻
					</a>
					<a
						href="https://linkedin.com/in/paulmbui"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 text-2xl transition-all hover:scale-110 hover:border-purple-500/50"
					>
						🔗
					</a>
					<a
						href="https://twitter.com/paulmbui"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 text-2xl transition-all hover:scale-110 hover:border-purple-500/50"
					>
						🐦
					</a>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	@keyframes blob {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		25% {
			transform: translate(20px, -50px) scale(1.1);
		}
		50% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		75% {
			transform: translate(20px, 50px) scale(1.05);
		}
	}

	.animate-blob {
		animation: blob 7s infinite;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.animation-delay-4000 {
		animation-delay: 4s;
	}
</style>
