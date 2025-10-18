<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isVisible = false;
	let countdown = 10;
	let intervalId: ReturnType<typeof setInterval>;

	$: error = $page.error;
	$: status = $page.status;

	// Determine error type
	$: is404 = status === 404;
	$: is500 = status === 500 || status >= 500;
	$: isOtherError = !is404 && !is500;

	onMount(() => {
		isVisible = true;

		// Start countdown for auto-redirect
		intervalId = setInterval(() => {
			countdown--;
			if (countdown <= 0) {
				window.location.href = '/';
			}
		}, 1500);

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});

	function goHome() {
		window.location.href = '/';
	}

	function goBack() {
		window.history.back();
	}
</script>

<svelte:head>
	<title
		>{is404 ? '404 - Page Not Found' : is500 ? '500 - Server Error' : 'Error'} - Paul Mbui</title
	>
</svelte:head>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-20 text-white"
>
	<!-- Animated Background -->
	<div class="pointer-events-none fixed inset-0 overflow-hidden">
		<div
			class="animate-blob absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary-500 opacity-10 mix-blend-multiply blur-3xl filter"
		></div>
		<div
			class="animate-blob animation-delay-2000 absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-primary-500 opacity-10 mix-blend-multiply blur-3xl filter"
		></div>
		<div
			class="animate-blob animation-delay-4000 absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-cyan-500 opacity-10 mix-blend-multiply blur-3xl filter"
		></div>
	</div>

	{#if isVisible}
		<div class="relative z-10 mx-auto max-w-4xl text-center" in:fade={{ duration: 400 }}>
			<!-- Error Icon/Animation -->
			<div class="mb-8" in:fly={{ y: -50, delay: 200, duration: 600 }}>
				{#if is404}
					<div class="mb-4 animate-bounce text-9xl">🔍</div>
					<div class="mb-4 text-8xl font-bold text-primary-400">404</div>
				{:else if is500}
					<div class="mb-4 animate-pulse text-9xl">⚠️</div>
					<div class="mb-4 text-8xl font-bold text-red-400">500</div>
				{:else}
					<div class="mb-4 text-9xl">😕</div>
					<div class="mb-4 text-8xl font-bold text-orange-400">{status}</div>
				{/if}
			</div>

			<!-- Error Title -->
			<div in:fly={{ y: 30, delay: 400, duration: 600 }}>
				<h1 class="mb-6 text-4xl font-bold md:text-6xl">
					{#if is404}
						<span
							class="bg-gradient-to-r from-primary-400 to-primary-400 bg-clip-text text-transparent"
						>
							Page Not Found
						</span>
					{:else if is500}
						<span class="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
							Server Error
						</span>
					{:else}
						<span
							class="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
						>
							Something Went Wrong
						</span>
					{/if}
				</h1>

				<!-- Error Description -->
				<p class="mx-auto mb-4 max-w-2xl text-xl text-slate-300">
					{#if is404}
						The page you're looking for doesn't exist. It might have been moved or deleted.
					{:else if is500}
						Oops! Something went wrong on our end. We're working to fix it.
					{:else}
						We encountered an unexpected error. Please try again.
					{/if}
				</p>

				{#if error?.message}
					<p class="mb-8 font-mono text-sm text-slate-500">
						Error: {error.message}
					</p>
				{/if}
			</div>

			<!-- Helpful Suggestions -->
			<div class="mb-12" in:fly={{ y: 30, delay: 600, duration: 600 }}>
				<div
					class="inline-block max-w-2xl rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 text-left backdrop-blur-sm"
				>
					<h2 class="mb-4 text-xl font-semibold text-primary-400">
						{#if is404}
							What you can do:
						{:else if is500}
							Try this:
						{:else}
							Suggestions:
						{/if}
					</h2>
					<ul class="space-y-3 text-slate-300">
						{#if is404}
							<li class="flex items-start gap-3">
								<span class="text-2xl">🏠</span>
								<span>Go back to the homepage and start fresh</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-2xl">🔍</span>
								<span>Check if you typed the URL correctly</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-2xl">📧</span>
								<span>Contact me if you think this is a mistake</span>
							</li>
						{:else if is500}
							<li class="flex items-start gap-3">
								<span class="text-2xl">🔄</span>
								<span>Refresh the page in a few moments</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-2xl">⏰</span>
								<span>Wait a minute and try again</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-2xl">📧</span>
								<span>Contact me if the problem persists</span>
							</li>
						{:else}
							<li class="flex items-start gap-3">
								<span class="text-2xl">🔙</span>
								<span>Go back to the previous page</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-2xl">🏠</span>
								<span>Return to the homepage</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="text-2xl">📧</span>
								<span>Let me know about this issue</span>
							</li>
						{/if}
					</ul>
				</div>
			</div>

			<!-- Action Buttons -->
			<div
				class="mb-8 flex flex-col justify-center gap-4 sm:flex-row"
				in:fly={{ y: 30, delay: 800, duration: 600 }}
			>
				<button
					on:click={goHome}
					class="rounded-full bg-gradient-to-r from-primary-600 to-primary-600 px-8 py-4 font-semibold shadow-lg shadow-primary-500/50 transition-transform hover:scale-105"
				>
					🏠 Go to Homepage
				</button>
				<button
					on:click={goBack}
					class="rounded-full border-2 border-primary-500 px-8 py-4 font-semibold transition-all hover:scale-105 hover:bg-primary-500/10"
				>
					← Go Back
				</button>
			</div>

			<!-- Quick Links -->
			<div class="mb-8" in:fly={{ y: 30, delay: 1000, duration: 600 }}>
				<p class="mb-4 text-slate-400">Or visit these popular pages:</p>
				<div class="flex flex-wrap justify-center gap-3">
					<a
						href="/projects"
						class="rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2 text-sm transition-all hover:scale-105 hover:border-primary-500/50"
					>
						Projects
					</a>
					<a
						href="/services"
						class="rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2 text-sm transition-all hover:scale-105 hover:border-primary-500/50"
					>
						Services
					</a>
					<a
						href="/about"
						class="rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2 text-sm transition-all hover:scale-105 hover:border-primary-500/50"
					>
						About
					</a>
					<a
						href="/contact"
						class="rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2 text-sm transition-all hover:scale-105 hover:border-primary-500/50"
					>
						Contact
					</a>
				</div>
			</div>

			<!-- Auto-redirect countdown -->
			<div class="text-sm text-slate-500" in:fly={{ y: 30, delay: 1200, duration: 600 }}>
				<p>
					Automatically redirecting to homepage in <span class="font-bold text-primary-400"
						>{countdown}</span
					> seconds...
				</p>
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
