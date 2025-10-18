<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let isVisible = false;
	let showModal = false;
	let modalMessage = '';
	let isSuccess = false;
	let isSubmitting = false;

	let formData = {
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	};

	const contactInfo = [
		{
			icon: '📧',
			label: 'Email',
			value: 'hello@paulmbui.co.ke',
			link: 'mailto:hello@paulmbui.co.ke'
		},
		{ icon: '📱', label: 'Phone', value: '+254 746 544 646', link: 'tel:+254746544646' },
		{ icon: '📍', label: 'Location', value: 'Mombasa, Kenya', link: '#' },
		{
			icon: '🔗',
			label: 'LinkedIn',
			value: 'linkedin.com/in/paulmbui',
			link: 'https://linkedin.com/in/paulmbui'
		}
	];

	onMount(() => {
		// simple reveal for elements above the fold
		isVisible = true;
	});

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;

		try {
			const FORMSPARK_ACTION_URL = 'https://submit-form.com/636DNFlN6';

			const response = await fetch(FORMSPARK_ACTION_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				isSuccess = true;
				modalMessage = 'Thank you for reaching out! Your message has been sent successfully.';
				showModal = true;
				formData = { name: '', email: '', subject: '', message: '', phone: '' };

				setTimeout(() => redirectToThankYou(), 1200);
			} else {
				throw new Error('Form submission failed');
			}
		} catch (error) {
			isSuccess = false;
			modalMessage = 'Oops! Something went wrong. Please try again or email me directly.';
			showModal = true;
		} finally {
			isSubmitting = false;
		}
	}

	function redirectToThankYou() {
		showModal = false;
		goto(`/thank-you?name=${encodeURIComponent(formData.name || 'Friend')}`);
	}

	function closeModal() {
		if (isSuccess) redirectToThankYou();
		else showModal = false;
	}
</script>

<svelte:head>
	<title>Contact Me - Paul Mbui | Get In Touch</title>
	<meta
		name="description"
		content="Get in touch with Paul Mbui for web development projects, collaborations, or inquiries."
	/>
</svelte:head>

<div class="min-h-screen text-white">
	<!-- MAIN CONTENT: contact info + form -->
	<section class="px-6 py-14" aria-labelledby="contact-heading">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-12 lg:grid-cols-5">
				<!-- Contact Info (enter-down) -->
				<div class="enter-down space-y-8 lg:col-span-2">
					<h2 id="contact-heading" class="text-2xl font-bold text-primary md:text-3xl">
						Get In Touch
					</h2>
					<p class="max-w-xl text-secondary">
						I'm always open to discussing new projects, creative ideas, or opportunities to be part
						of your vision. Reach out through any channel below.
					</p>

					<div class="space-y-4">
						{#each contactInfo as info, i}
							<a
								href={info.link}
								target={info.link.startsWith('http') ? '_blank' : '_self'}
								rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
								class="group surface flex items-center gap-4 rounded-xl p-4 transition-transform hover:translate-y-[-4px]"
								style="border:1px solid rgba(255,255,255,0.02)"
								in:fly={{ x: -30, delay: 200 + i * 80 }}
							>
								<div class="text-2xl">{info.icon}</div>
								<div>
									<div class="text-sm text-secondary">{info.label}</div>
									<div class="font-medium text-primary group-hover:text-accent">{info.value}</div>
								</div>
							</a>
						{/each}
					</div>

					<div class="enter-down pt-6" in:fly={{ x: -30, delay: 650 }}>
						<h3 class="mb-3 font-semibold">Follow Me</h3>
						<div class="flex gap-3">
							<a
								href="https://github.com/paulmbui20"
								target="_blank"
								rel="noopener noreferrer"
								class="surface flex h-11 w-11 items-center justify-center rounded-full">💻</a
							>
							<a
								href="https://linkedin.com/in/paulmbui"
								target="_blank"
								rel="noopener noreferrer"
								class="surface flex h-11 w-11 items-center justify-center rounded-full">🔗</a
							>
							<a
								href="https://twitter.com/paulmbui"
								target="_blank"
								rel="noopener noreferrer"
								class="surface flex h-11 w-11 items-center justify-center rounded-full">🐦</a
							>
						</div>
					</div>
				</div>

				<!-- Contact Form (enter-up, over the fold friendly) -->
				<div class="lg:col-span-3" id="contact-form">
					<form on:submit={handleSubmit} class="enter-up space-y-6" in:fly={{ x: 30, delay: 200 }}>
						<div class="surface space-y-6 border-primary p-8 backdrop-blur-sm">
							<h3 class="text-2xl font-bold">Send Me a Message</h3>

							<div class="grid gap-6 md:grid-cols-2">
								<div>
									<label for="name" class="mb-2 block text-sm font-medium text-secondary"
										>Your Name</label
									>
									<input
										id="name"
										type="text"
										bind:value={formData.name}
										required
										placeholder="John Doe"
										class="w-full rounded-lg border border-transparent bg-[rgba(255,255,255,0.02)] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.35)] transition-all focus:ring-2 focus:outline-none"
									/>
								</div>

								<div>
									<label for="phone" class="mb-2 block text-sm font-medium text-secondary"
										>Your Phone Number</label
									>
									<input
										id="phone"
										type="tel"
										bind:value={formData.phone}
										required
										placeholder="123-456-7890"
										class="w-full rounded-lg border border-transparent bg-[rgba(255,255,255,0.02)] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.35)] transition-all focus:ring-2 focus:outline-none"
									/>
								</div>

								<div>
									<label for="email" class="mb-2 block text-sm font-medium text-secondary"
										>Your Email</label
									>
									<input
										id="email"
										type="email"
										bind:value={formData.email}
										required
										placeholder="john@example.com"
										class="w-full rounded-lg border border-transparent bg-[rgba(255,255,255,0.02)] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.35)] transition-all focus:ring-2 focus:outline-none"
									/>
								</div>
							</div>

							<div>
								<label for="subject" class="mb-2 block text-sm font-medium text-secondary"
									>Subject</label
								>
								<input
									id="subject"
									type="text"
									bind:value={formData.subject}
									required
									placeholder="Project Inquiry"
									class="w-full rounded-lg border border-transparent bg-[rgba(255,255,255,0.02)] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.35)] transition-all focus:ring-2 focus:outline-none"
								/>
							</div>

							<div>
								<label for="message" class="mb-2 block text-sm font-medium text-secondary"
									>Message</label
								>
								<textarea
									id="message"
									bind:value={formData.message}
									required
									rows="6"
									placeholder="Tell me about your project..."
									class="w-full resize-none rounded-lg border border-transparent bg-[rgba(255,255,255,0.02)] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.35)] transition-all focus:ring-2 focus:outline-none"
								></textarea>
							</div>

							<button type="submit" disabled={isSubmitting} class="btn-cta w-full">
								{#if isSubmitting}
									<span
										class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
									></span>
									Sending...
								{:else}
									Send Message
									<span aria-hidden>→</span>
								{/if}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</div>

{#if showModal}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
		on:click={closeModal}
	>
		<div
			class="surface w-full max-w-md rounded-2xl p-8 shadow-2xl"
			on:click|stopPropagation
			transition:scale={{ duration: 240 }}
		>
			<div class="text-center">
				<div class="mb-4 text-6xl">{isSuccess ? '✅' : '❌'}</div>
				<h3 class="mb-4 text-2xl font-bold">{isSuccess ? 'Message Sent!' : 'Oops!'}</h3>
				<p class="mb-6 text-secondary">{modalMessage}</p>
				<button on:click={closeModal} class="btn-cta w-full"
					>{isSuccess ? 'Okay' : 'Try Again'}</button
				>
			</div>
		</div>
	</div>
{/if}

<!-- Theme: only three tunable color variables (primary, secondary, accent) -->
<style>
	:root {
		--color-primary: #10b981; /* emerald */
		--color-secondary: #64748b; /* muted grayscale */
		--color-accent: #14b8a6; /* accent (near-emerald) */

		--ff-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
	}

	/* Over-the-fold utility: hero must be visible without scroll on most screens */
	.hero-fold {
		min-height: 62vh; /* tuned to keep headline + CTA above the fold on desktop and large tablets */
		display: grid;
		place-items: center;
		text-align: center;
	}

	/* Slide animations (CSS + small Svelte-friendly classes) */
	@keyframes slide-up-in {
		from {
			transform: translateY(24px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-down-in {
		from {
			transform: translateY(-24px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-up-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(-12px);
			opacity: 0;
		}
	}

	.enter-up {
		animation: slide-up-in 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
	}
	.enter-down {
		animation: slide-down-in 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
	}
	.exit-up {
		animation: slide-up-out 320ms ease both;
	}

	/* Small reusable surface styles using only primary/secondary/accent */
	.surface {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0.04));
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.04);
	}

	:global(body) {
		font-family: var(--ff-sans);
		background: #0b1220;
		color: white;
	}

	/* Utility classes for colors that reference the three variables */
	.text-primary {
		color: var(--color-primary);
	}
	.text-secondary {
		color: var(--color-secondary);
	}
	.bg-primary {
		background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
	}
	.border-primary {
		border-color: rgba(16, 185, 129, 0.15);
	}

	/* Button using only the three tokens */
	.btn-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.9rem 1.2rem;
		border-radius: 10px;
		font-weight: 600;
		cursor: pointer;
		text-decoration: none;
		border: none;
		background-image: linear-gradient(90deg, var(--color-primary), var(--color-accent));
		color: white;
		box-shadow: 0 8px 30px rgba(16, 185, 129, 0.12);
		transition:
			transform 0.18s ease,
			box-shadow 0.18s ease;
	}
	.btn-cta:hover {
		transform: translateY(-3px);
		box-shadow: 0 18px 40px rgba(20, 184, 166, 0.12);
	}

	/* small responsive tweaks */
	@media (max-width: 768px) {
		.hero-fold {
			padding: 3rem 1.25rem;
			min-height: 56vh;
		}
	}

	/* blob animation preserved but toned down and colored with primary/accent */
	@keyframes blob {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		25% {
			transform: translate(20px, -50px) scale(1.05);
		}
		50% {
			transform: translate(-20px, 20px) scale(0.95);
		}
		75% {
			transform: translate(20px, 50px) scale(1.02);
		}
	}
	.blob {
		animation: blob 8s infinite;
		filter: blur(48px);
		opacity: 0.08;
		mix-blend-mode: multiply;
	}
</style>
