<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	/** Options for the viewport action */
	interface ViewportOptions {
		threshold: number;
		once: boolean;
		onEnter?: () => void;
	}

	function viewport(node: HTMLElement, options: Partial<ViewportOptions> = {}) {
		const defaults: ViewportOptions = {
			threshold: 0.1, // Trigger when 10% of the element is visible
			once: true // Only trigger once
		};
		const settings = { ...defaults, ...options };

		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Fire the custom event for backward compatibility
						node.dispatchEvent(new CustomEvent('enterViewport'));
						// Call the provided callback if present
						if (typeof settings.onEnter === 'function') {
							settings.onEnter();
						}
						if (settings.once) {
							observer.unobserve(node);
						}
					}
				});
			},
			{ threshold: settings.threshold } // Pass only valid IntersectionObserver options
		);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}

	// -----------------------------------------------------------------
	// --- Component State (Typed) ---
	// -----------------------------------------------------------------

	let isVisible: boolean = false; // For the initial "above the fold" hero animation

	// Booleans to trigger animations on scroll
	let showBio: boolean = false;
	let showSkillsTitle: boolean = false;
	let showSkillsGrid: boolean = false;
	let showSubSkills: boolean = false;
	let showJourneyTitle: boolean = false;
	let showJourneyExperience: boolean = false;
	let showJourneyEducation: boolean = false;
	let showCta: boolean = false;

	// -----------------------------------------------------------------
	// --- Data Interfaces ---
	// -----------------------------------------------------------------

	interface Skill {
		name: string;
		level: number;
		icon: string;
		category: 'Frontend' | 'Backend' | 'Framework' | 'Styling' | 'CMS';
	}

	interface Experience {
		year: string;
		role: string;
		company: string;
		description: string;
	}

	interface Education {
		year: string;
		degree: string;
		institution: string;
		description: string;
	}

	// --- Data Arrays (Typed) ---

	const skills: Skill[] = [
		{ name: 'HTML/CSS/JS', level: 95, icon: '🌐', category: 'Frontend' },
		{ name: 'Python/Django', level: 92, icon: '🐍', category: 'Backend' },
		{ name: 'PHP/MySQL', level: 85, icon: '🔧', category: 'Backend' },
		{ name: 'SvelteKit', level: 90, icon: '⚡', category: 'Framework' },
		{ name: 'Tailwind CSS', level: 95, icon: '🎨', category: 'Styling' },
		{ name: 'WordPress', level: 93, icon: '📝', category: 'CMS' }
	];

	const experiences: Experience[] = [
		{
			year: 'Oct 2025',
			role: 'Web Developer',
			company: 'Nasha Tech',
			description:
				'Built a sleek, modern, and fast website for Nasha Technologies Tanzania, delivering exceptional performance and user experience.'
		},
		{
			year: 'Nov 2023 - Oct 2025',
			role: 'SEO Specialist',
			company: 'Mushroom Kenya',
			description:
				'Ranked mushroomkenya.co.ke for various keywords related to mushroom farming in Kenya, driving significant sales growth through strategic SEO optimization.'
		},
		{
			year: 'Jun 2024',
			role: 'Web Designer',
			company: 'Bii Edwin',
			description:
				'Delivered custom web design solutions tailored to client requirements and business goals.'
		},
		{
			year: 'Nov 2023',
			role: 'Web Developer',
			company: 'Demi Farm',
			description:
				'Facilitated hosting migration and built demifarms.com website from scratch, ensuring smooth transition and optimal performance.'
		},
		{
			year: 'Aug 2023',
			role: 'Web Developer',
			company: 'TymesTech',
			description:
				'Developed and maintained personal portfolio website showcasing web development capabilities and projects.'
		}
	];

	const education: Education[] = [
		{
			year: '2021-2025',
			degree: 'Bachelor of Education - Physical Sciences',
			institution: 'Pwani University',
			description: 'Comprehensive education combining teaching methodologies with physical sciences'
		},
		{
			year: '2024',
			degree: 'Full Stack Web Development',
			institution: 'EMobilis Training Scholarship',
			description: 'Intensive training in modern web development technologies and best practices'
		}
	];

	let activeSkill: number = -1;

	onMount(() => {
		isVisible = true; // Triggers the hero animation
	});
</script>

<svelte:head>
	<title>About Me - Paul Mbui | Web Developer & SEO Specialist</title>
	<meta
		name="description"
		content="Professional web developer based in Kilifi, Kenya specializing in Python Django, WordPress, and SEO optimization. Building modern web applications and driving results."
	/>
</svelte:head>

<div class="min-h-screen bg-black text-white">
	<section class="relative overflow-hidden px-6 pt-24 pb-8">
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div
				class="animate-blob absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-500 opacity-10 mix-blend-multiply blur-3xl filter"
			></div>
			<div
				class="animate-blob animation-delay-2000 absolute top-0 right-1/4 h-96 w-96 rounded-full bg-accent-500 opacity-10 mix-blend-multiply blur-3xl filter"
			></div>
		</div>

		{#if isVisible}
			<div class="relative z-10 mx-auto max-w-6xl text-center">
				<div in:fly={{ y: 30, duration: 600 }}>
					<h1
						class="mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
					>
						About Me
					</h1>
					<p class="mx-auto max-w-3xl text-lg text-secondary-400 md:text-xl">
						Web Developer | SEO Specialist | Web Security Specialist
					</p>
				</div>
			</div>
		{/if}

		<div class="mx-auto max-w-6xl">
			<div
				class="mb-20 grid gap-12 md:grid-cols-2 lg:gap-16"
				use:viewport={{
					onEnter: () => {
						showBio = true;
					}
				}}
			>
				{#if showBio}
					<div class="space-y-6" in:fly={{ x: -50, delay: 200, duration: 600 }}>
						<h2 class="mb-6 text-3xl font-bold text-primary-400">My Story</h2>
						<p class="text-lg leading-relaxed text-secondary-300">
							Hi! I'm Paul Mbui, a professional web developer based in Kilifi, Kenya. I specialize
							in building web applications as solutions using Python Django, HTML/CSS (Tailwind
							CSS), JavaScript, and WordPress. My journey in tech began during my studies at Pwani
							University, where I discovered my passion for creating digital solutions.
						</p>
						<p class="text-lg leading-relaxed text-secondary-300">
							I studied Python, Django, PHP, and SQL for backend development, then expanded my
							expertise with frontend libraries like Bootstrap and Tailwind CSS. I initially focused
							on WordPress development before diving deep into Django, and I'm currently learning
							React, Node.js, and Next.js to further enhance my full-stack capabilities.
						</p>
						<p class="text-lg leading-relaxed text-secondary-300">
							As an SEO Specialist at Mushroom Kenya, I successfully ranked their website for
							various keywords related to mushroom farming, significantly driving sales. I've also
							completed web development projects for multiple clients including Nasha Tech, Demi
							Farm, and others, specializing in hosting migration, website building, and SEO
							optimization. I hold multiple certifications in web design, WordPress development, and
							SEO content writing, and I'm always eager to learn new technologies to improve my
							craft.
						</p>

						<div class="grid grid-cols-2 gap-6 pt-6">
							<div
								class="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20"
							>
								<div
									class="mb-2 text-4xl font-bold text-primary-400 transition-transform duration-300 group-hover:scale-110"
								>
									20+
								</div>
								<div class="text-secondary-400">Projects Completed</div>
							</div>
							<div
								class="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/20"
							>
								<div
									class="mb-2 text-4xl font-bold text-accent-400 transition-transform duration-300 group-hover:scale-110"
								>
									2+
								</div>
								<div class="text-secondary-400">Years Experience</div>
							</div>
						</div>
					</div>

					<div class="relative" in:fly={{ x: 50, delay: 200, duration: 600 }}>
						<div class="md:sticky md:top-36">
							<div
								class="group flex aspect-square items-center justify-center rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-primary-500/50 hover:shadow-primary-500/20"
							>
								<div class="text-9xl transition-transform duration-500 group-hover:scale-110">
									👨‍💻
								</div>
							</div>
							<div
								class="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-primary-500/20 blur-2xl"
							></div>
							<div
								class="pointer-events-none absolute -top-6 -left-6 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl"
							></div>
						</div>
					</div>
				{/if}
			</div>

			<div class="mb-20">
				<div use:viewport={{ onEnter: () => (showSkillsTitle = true) }}>
					{#if showSkillsTitle}
						<h2
							class="mb-10 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl"
							in:fly={{ y: 20, duration: 500 }}
						>
							My Skills
						</h2>
					{/if}
				</div>

				<div
					class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
					use:viewport={{ onEnter: () => (showSkillsGrid = true) }}
				>
					{#if showSkillsGrid}
						{#each skills as skill, i}
							<div
								role="button"
								tabindex="0"
								class="group cursor-pointer rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20"
								on:mouseenter={() => (activeSkill = i)}
								on:mouseleave={() => (activeSkill = -1)}
								on:keydown={(e) => e.key === 'Enter' && (activeSkill = activeSkill === i ? -1 : i)}
								in:fly={{ y: 30, delay: 100 + i * 50 }}
							>
								<div class="mb-4 flex items-center justify-between">
									<div class="flex items-center gap-3">
										<span class="text-3xl transition-transform duration-300 group-hover:scale-125"
											>{skill.icon}</span
										>
										<div>
											<span class="block text-lg font-semibold text-white">{skill.name}</span>
											<span class="text-sm text-secondary-500">{skill.category}</span>
										</div>
									</div>
									<span class="font-mono text-lg font-bold text-primary-400">{skill.level}%</span>
								</div>
								<div class="h-2 overflow-hidden rounded-full bg-white/10">
									<div
										class="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1000 ease-out"
										style="width: {activeSkill === i ? skill.level : 0}%"
									></div>
								</div>
							</div>
						{/each}
					{/if}
				</div>

				<div
					class="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16"
					use:viewport={{ onEnter: () => (showSubSkills = true) }}
				>
					{#if showSubSkills}
						<div
							class="rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-500/5 to-transparent p-8"
							in:fly={{ x: -30, duration: 500, delay: 100 }}
						>
							<h3 class="mb-6 text-2xl font-semibold text-accent-400">Technologies I Use</h3>
							<div class="flex flex-wrap gap-3">
								{#each ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python', 'Django', 'PHP', 'MySQL', 'SvelteKit', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'WordPress', 'Git', 'SEO', 'Web Security'] as tech}
									<span
										class="rounded-full border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent px-6 py-3 font-medium text-primary-300 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<div
							class="rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/5 to-transparent p-8"
							in:fly={{ x: 30, duration: 500, delay: 100 }}
						>
							<h3 class="mb-6 text-2xl font-semibold text-primary-400">Certifications</h3>
							<div class="grid gap-3 sm:grid-cols-2">
								{#each ['WordPress Development', 'SEO Content Writing', 'Front End Web Development', 'HTML5, PHP & SQL (Sololearn)', 'Canva Video Creation'] as cert}
									<div
										class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3 transition-all duration-300 hover:border-primary-500/30 hover:bg-primary-500/5"
									>
										<span class="text-xl">✓</span>
										<span class="text-sm text-secondary-300">{cert}</span>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>

			<div class="mb-20">
				<div use:viewport={{ onEnter: () => (showJourneyTitle = true) }}>
					{#if showJourneyTitle}
						<h2
							class="mb-12 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl"
							in:fly={{ y: 20, duration: 500 }}
						>
							My Journey
						</h2>
					{/if}
				</div>

				<div class="grid gap-16 md:grid-cols-2">
					<div use:viewport={{ onEnter: () => (showJourneyExperience = true) }}>
						<h3 class="mb-10 text-3xl font-bold text-primary-400">Work Experience</h3>
						{#if showJourneyExperience}
							<div class="space-y-6">
								{#each experiences as exp, i}
									<div
										class="group flex items-start gap-6"
										in:fly={{ x: -30, delay: i * 100, duration: 500 }}
									>
										<div class="hidden font-mono text-sm text-primary-400 sm:block">
											{exp.year}
										</div>
										<div
											class="flex-1 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20"
										>
											<div class="mb-2 font-mono text-sm text-primary-400 sm:hidden">
												{exp.year}
											</div>
											<div class="mb-1 text-xl font-semibold text-white">{exp.role}</div>
											<div class="mb-2 text-secondary-400">{exp.company}</div>
											<div class="text-sm text-secondary-500">{exp.description}</div>
										</div>
									</div>
								{/each}
							</div>
						{/if}
					</div>

					<div use:viewport={{ onEnter: () => (showJourneyEducation = true) }}>
						<h3 class="mb-10 text-3xl font-bold text-accent-400">Education</h3>
						{#if showJourneyEducation}
							<div class="space-y-6">
								{#each education as edu, i}
									<div
										class="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20"
										in:fly={{ y: 30, delay: i * 100, duration: 500 }}
									>
										<div class="mb-2 font-mono text-sm text-accent-400">{edu.year}</div>
										<div class="mb-1 text-xl font-semibold text-white">{edu.degree}</div>
										<div class="mb-2 text-secondary-400">{edu.institution}</div>
										<p class="text-sm text-secondary-500">{edu.description}</p>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>

			<div class="text-center" use:viewport={{ onEnter: () => (showCta = true) }}>
				{#if showCta}
					<div in:fly={{ y: 40, duration: 600 }}>
						<h3 class="mb-4 text-3xl font-bold text-white">Let's Work Together</h3>
						<p class="mx-auto mb-6 max-w-2xl text-secondary-400">
							I'm always interested in hearing about new projects and opportunities.
						</p>
						<a
							href="/contact"
							class="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/50"
						>
							<span class="relative z-10">Get In Touch</span>
							<div
								class="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-500 to-primary-500 transition-transform duration-300 group-hover:translate-x-0"
							></div>
						</a>
					</div>
				{/if}
			</div>
		</div>
	</section>
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
</style>
