<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let isVisible = false;

	const skills = [
		{ name: 'HTML/CSS/JS', level: 95, icon: '🌐', category: 'Frontend' },
		{ name: 'Python', level: 90, icon: '🐍', category: 'Backend' },
		{ name: 'PHP', level: 85, icon: '🔧', category: 'Backend' },
		{ name: 'SvelteKit', level: 88, icon: '⚡', category: 'Framework' },
		{ name: 'Tailwind CSS', level: 92, icon: '🎨', category: 'Styling' },
		{ name: 'MySQL', level: 87, icon: '🗄️', category: 'Database' }
	];

	const experiences = [
		{
			year: '2023-Present',
			role: 'Full Stack Developer',
			company: 'Tech Solutions',
			description:
				'Leading development of enterprise web applications using modern frameworks and best practices.'
		},
		{
			year: '2021-2023',
			role: 'Frontend Developer',
			company: 'Digital Agency',
			description:
				'Specialized in React and Vue.js applications, delivering pixel-perfect user interfaces.'
		},
		{
			year: '2020-2021',
			role: 'Web Developer',
			company: 'Startup Inc',
			description: 'Built responsive websites and e-commerce platforms for various clients.'
		}
	];

	const education = [
		{
			year: '2018-2022',
			degree: 'Bachelor of Education Science',
			institution: 'Pwani University',
			description: ''
		},
		{
			year: '2024',
			degree: 'Full Stack Web Development',
			institution: 'E-mobilis',
			description: 'Certified in modern web development practices'
		}
	];
	let activeSkill = -1;

	onMount(() => {
		isVisible = true;
	});
</script>

<svelte:head>
	<title>About Me - Paul Mbui | Full Stack Developer</title>
	<meta
		name="description"
		content="Learn more about Paul Mbui - Full Stack Developer from Kenya specializing in modern web technologies."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
	<!-- Hero Section -->
	<section class="relative overflow-hidden px-6 pt-32 pb-20">
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div
				class="animate-blob absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-500 opacity-10 mix-blend-multiply blur-3xl filter"
			></div>
			<div
				class="animate-blob animation-delay-2000 absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary-500 opacity-10 mix-blend-multiply blur-3xl filter"
			></div>
		</div>

		{#if isVisible}
			<div class="relative z-10 mx-auto max-w-6xl">
				<div in:fly={{ y: 30, duration: 600 }}>
					<h1
						class="mb-6 bg-gradient-to-r from-primary-400 to-primary-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
					>
						About Me
					</h1>
					<p class="max-w-3xl text-xl text-slate-300 md:text-2xl">
						Passionate developer crafting digital experiences that make a difference
					</p>
				</div>
			</div>
		{/if}
	</section>

	<!-- Main Content -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<!-- Bio Section -->
			<div class="mb-32 grid gap-12 md:grid-cols-2">
				<div class="space-y-6" in:fly={{ x: -50, delay: 200 }}>
					<h2 class="mb-6 text-3xl font-bold text-primary-400">My Story</h2>
					<p class="text-lg leading-relaxed text-slate-300">
						Hi! I'm Paul Mbui, a full-stack developer based in Mombasa, Kenya. I discovered my
						passion for coding during my university years and haven't looked back since. I love
						turning complex problems into simple, beautiful, and intuitive designs.
					</p>
					<p class="text-lg leading-relaxed text-slate-300">
						Over the years, I've worked with startups, agencies, and established companies, helping
						them build web applications that scale. My approach combines technical excellence with
						user-centered design, ensuring that every project not only works flawlessly but also
						delights users.
					</p>
					<p class="text-lg leading-relaxed text-slate-300">
						When I'm not coding, you'll find me exploring new technologies, writing tech blogs,
						gaming, or attending local tech meetups. I believe in continuous learning and giving
						back to the developer community.
					</p>

					<!-- Quick Stats -->
					<div class="grid grid-cols-2 gap-6 pt-6">
						<div
							class="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:border-primary-500/50"
						>
							<div class="mb-2 text-4xl font-bold text-primary-400">50+</div>
							<div class="text-slate-400">Projects Completed</div>
						</div>
						<div
							class="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:border-primary-500/50"
						>
							<div class="mb-2 text-4xl font-bold text-primary-400">3+</div>
							<div class="text-slate-400">Years Experience</div>
						</div>
					</div>
				</div>

				<div class="relative" in:fly={{ x: 50, delay: 200 }}>
					<div
						class="flex aspect-square items-center justify-center rounded-2xl border border-primary-500/20 bg-gradient-to-br from-primary-500/20 to-primary-500/20 p-8 backdrop-blur-sm"
					>
						<div class="text-9xl">👨‍💻</div>
					</div>
					<div
						class="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-primary-500/20 blur-2xl"
					></div>
					<div
						class="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary-500/20 blur-2xl"
					></div>
				</div>
			</div>

			<!-- Skills Section -->
			<div class="mb-32">
				<h2
					class="mb-12 bg-gradient-to-r from-primary-400 to-primary-400 bg-clip-text text-center text-4xl font-bold text-transparent"
				>
					Technical Skills
				</h2>
				<div class="grid gap-6 md:grid-cols-2">
					{#each skills as skill, i}
						<div
							role="button"
							tabindex="0"
							class="group cursor-pointer rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm transition-all hover:border-primary-500/50"
							on:mouseenter={() => (activeSkill = i)}
							on:mouseleave={() => (activeSkill = -1)}
							in:fly={{ y: 30, delay: 300 + i * 50 }}
						>
							<div class="mb-4 flex items-center justify-between">
								<div class="flex items-center gap-3">
									<span class="text-3xl transition-transform group-hover:scale-125"
										>{skill.icon}</span
									>
									<div>
										<span class="block text-lg font-semibold">{skill.name}</span>
										<span class="text-sm text-slate-500">{skill.category}</span>
									</div>
								</div>
								<span class="font-mono text-lg text-primary-400">{skill.level}%</span>
							</div>
							<div class="h-2 overflow-hidden rounded-full bg-slate-700">
								<div
									class="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-500 transition-all duration-1000 ease-out"
									style="width: {activeSkill === i ? skill.level : 0}%"
								></div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Additional Skills -->
				<div class="mt-12 text-center">
					<h3 class="mb-6 text-2xl font-semibold text-slate-300">Also Proficient In</h3>
					<div class="flex flex-wrap justify-center gap-4">
						{#each ['Git', 'WordPress', 'Shopify', 'SEO', 'Bootstrap', 'REST APIs', 'Responsive Design', 'Agile/Scrum'] as tech, i}
							<span
								class="rounded-full border border-slate-700/50 bg-slate-800/50 px-6 py-3 backdrop-blur-sm transition-all hover:scale-110 hover:border-primary-500/50"
								in:fly={{ y: 20, delay: 600 + i * 50 }}
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<!-- Experience Timeline -->
			<div class="mb-32">
				<h2
					class="mb-12 bg-gradient-to-r from-primary-400 to-primary-400 bg-clip-text text-center text-4xl font-bold text-transparent"
				>
					Work Experience
				</h2>
				<div class="space-y-6">
					{#each experiences as exp, i}
						<div class="group flex items-start gap-6" in:fly={{ x: -50, delay: i * 100 }}>
							<div
								class="hidden pt-2 font-mono text-sm whitespace-nowrap text-primary-400 sm:block"
							>
								{exp.year}
							</div>
							<div
								class="flex-1 rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm transition-all group-hover:scale-[1.02] hover:border-primary-500/50"
							>
								<div class="mb-2 font-mono text-sm text-primary-400 sm:hidden">{exp.year}</div>
								<div class="mb-1 text-xl font-semibold">{exp.role}</div>
								<div class="mb-2 text-slate-400">{exp.company}</div>
								<div class="text-sm text-slate-500">{exp.description}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Education -->
			<div class="mb-32">
				<h2
					class="mb-12 bg-gradient-to-r from-primary-400 to-primary-400 bg-clip-text text-center text-4xl font-bold text-transparent"
				>
					Education & Certifications
				</h2>
				<div class="grid gap-6 md:grid-cols-2">
					{#each education as edu, i}
						<div
							class="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary-500/50"
							in:fly={{ y: 30, delay: i * 100 }}
						>
							<div class="mb-3 font-mono text-sm text-primary-400">{edu.year}</div>
							<h3 class="mb-2 text-xl font-semibold">{edu.degree}</h3>
							<div class="mb-3 text-slate-400">{edu.institution}</div>
							<p class="text-sm text-slate-500">{edu.description}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- CTA -->
			<div class="text-center">
				<h3 class="mb-6 text-3xl font-bold">Let's Work Together</h3>
				<p class="mx-auto mb-8 max-w-2xl text-slate-400">
					I'm always interested in hearing about new projects and opportunities.
				</p>
				<a
					href="/contact"
					class="inline-block rounded-full bg-gradient-to-r from-primary-600 to-primary-600 px-8 py-4 font-semibold shadow-lg shadow-primary-500/50 transition-transform hover:scale-105"
				>
					Get In Touch
				</a>
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
