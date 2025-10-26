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
				<!-- Contact Info -->
				<div class="space-y-8 lg:col-span-2">
					<h2 id="contact-heading" class="text-2xl font-bold text-primary-500 md:text-3xl">
						Get In Touch
					</h2>
					<p class="max-w-xl text-secondary-400">
						I'm always open to discussing new projects, creative ideas, or opportunities to be part
						of your vision. Reach out through any channel below.
					</p>

					<div class="space-y-4">
						{#each contactInfo as info, i}
							<a
								href={info.link}
								target={info.link.startsWith('http') ? '_blank' : '_self'}
								rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
								class="group flex items-center gap-4 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-primary-500/20"
								in:fly={{ x: -30, delay: 200 + i * 80 }}
							>
								<div
									class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-500/20"
								>
									{info.icon}
								</div>
								<div>
									<div class="text-sm font-medium text-secondary-400">{info.label}</div>
									<div
										class="font-semibold text-white transition-colors group-hover:text-primary-400"
									>
										{info.value}
									</div>
								</div>
							</a>
						{/each}
					</div>

					<div class="pt-6" in:fly={{ x: -30, delay: 650 }}>
						<h3 class="mb-4 font-semibold text-primary-400">Follow Me</h3>
						<div class="flex gap-3">
							<a
								href="https://github.com/paulmbui20"
								target="_blank"
								rel="noopener noreferrer"
								class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20"
								aria-label="GitHub"
							>
								💻
							</a>
							<a
								href="https://linkedin.com/in/paulmbui"
								target="_blank"
								rel="noopener noreferrer"
								class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:bg-accent-500/10 hover:shadow-lg hover:shadow-accent-500/20"
								aria-label="LinkedIn"
							>
								🔗
							</a>
							<a
								href="https://twitter.com/paulmbui"
								target="_blank"
								rel="noopener noreferrer"
								class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20"
								aria-label="Twitter"
							>
								🐦
							</a>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="lg:col-span-3" id="contact-form">
					<form on:submit={handleSubmit} class="space-y-6" in:fly={{ x: 30, delay: 200 }}>
						<div
							class="space-y-6 rounded-2xl border border-primary-500/20 bg-gradient-to-br from-white/[0.03] to-transparent p-8 shadow-2xl backdrop-blur-sm"
						>
							<h3 class="text-2xl font-bold text-primary-400">Send Me a Message</h3>

							<div class="grid gap-6 md:grid-cols-2">
								<div>
									<label for="name" class="mb-2 block text-sm font-semibold text-secondary-300"
										>Your Name <span class="text-primary-400">*</span></label
									>
									<input
										id="name"
										type="text"
										bind:value={formData.name}
										required
										placeholder="John Doe"
										class="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-secondary-500 shadow-sm backdrop-blur-sm transition-all duration-300 focus:border-primary-500 focus:bg-white/[0.05] focus:shadow-lg focus:ring-2 focus:shadow-primary-500/20 focus:ring-primary-500/50 focus:outline-none"
									/>
								</div>

								<div>
									<label for="phone" class="mb-2 block text-sm font-semibold text-secondary-300"
										>Phone Number <span class="text-primary-400">*</span></label
									>
									<input
										id="phone"
										type="tel"
										bind:value={formData.phone}
										required
										placeholder="+254 123 456 789"
										class="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-secondary-500 shadow-sm backdrop-blur-sm transition-all duration-300 focus:border-primary-500 focus:bg-white/[0.05] focus:shadow-lg focus:ring-2 focus:shadow-primary-500/20 focus:ring-primary-500/50 focus:outline-none"
									/>
								</div>
							</div>

							<div>
								<label for="email" class="mb-2 block text-sm font-semibold text-secondary-300"
									>Your Email <span class="text-primary-400">*</span></label
								>
								<input
									id="email"
									type="email"
									bind:value={formData.email}
									required
									placeholder="john@example.com"
									class="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-secondary-500 shadow-sm backdrop-blur-sm transition-all duration-300 focus:border-primary-500 focus:bg-white/[0.05] focus:shadow-lg focus:ring-2 focus:shadow-primary-500/20 focus:ring-primary-500/50 focus:outline-none"
								/>
							</div>

							<div>
								<label for="subject" class="mb-2 block text-sm font-semibold text-secondary-300"
									>Subject <span class="text-primary-400">*</span></label
								>
								<input
									id="subject"
									type="text"
									bind:value={formData.subject}
									required
									placeholder="Project Inquiry"
									class="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-secondary-500 shadow-sm backdrop-blur-sm transition-all duration-300 focus:border-primary-500 focus:bg-white/[0.05] focus:shadow-lg focus:ring-2 focus:shadow-primary-500/20 focus:ring-primary-500/50 focus:outline-none"
								/>
							</div>

							<div>
								<label for="message" class="mb-2 block text-sm font-semibold text-secondary-300"
									>Message <span class="text-primary-400">*</span></label
								>
								<textarea
									id="message"
									bind:value={formData.message}
									required
									rows="6"
									placeholder="Tell me about your project..."
									class="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-secondary-500 shadow-sm backdrop-blur-sm transition-all duration-300 focus:border-primary-500 focus:bg-white/[0.05] focus:shadow-lg focus:ring-2 focus:shadow-primary-500/20 focus:ring-primary-500/50 focus:outline-none"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								class="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 font-bold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/40 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-black focus:outline-none disabled:opacity-50 disabled:hover:translate-y-0"
							>
								<span class="relative z-10 flex items-center justify-center gap-2">
									{#if isSubmitting}
										<span
											class="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
										></span>
										Sending...
									{:else}
										Send Message
										<span class="transition-transform duration-300 group-hover:translate-x-1"
											>→</span
										>
									{/if}
								</span>
								<div
									class="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-500 to-primary-500 transition-transform duration-300 group-hover:translate-x-0"
								></div>
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
		tabindex="0"
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
		on:click={closeModal}
		on:keydown={(e) => e.key === 'Escape' && closeModal()}
		role="dialog"
		aria-modal="true"
	>
		<div
			class="w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 shadow-2xl backdrop-blur-md"
			on:click|stopPropagation
			on:keydown|stopPropagation
			role="document"
			transition:scale={{ duration: 240 }}
		>
			<div class="text-center">
				<div class="mb-4 text-6xl">{isSuccess ? '✅' : '❌'}</div>
				<h3 class="mb-4 text-2xl font-bold text-white">
					{isSuccess ? 'Message Sent!' : 'Oops!'}
				</h3>
				<p class="mb-6 text-secondary-300">{modalMessage}</p>
				<button
					on:click={closeModal}
					class="w-full rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 font-bold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/40"
				>
					{isSuccess ? 'Okay' : 'Try Again'}
				</button>
			</div>
		</div>
	</div>
{/if}
