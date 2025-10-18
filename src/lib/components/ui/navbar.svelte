<script>
	import { page } from '$app/stores';
	let isOpen = false;

	const navItems = [
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Services', href: '/services' },
		{ label: 'Contact', href: '/contact' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-emerald-500/20 bg-black/80 backdrop-blur-md transition-all duration-300"
>
	<div class="mx-auto max-w-6xl px-6 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="group flex items-center gap-2">
				<div
					class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 transition-colors group-hover:bg-emerald-400"
				>
					<span class="text-lg font-bold text-black">&lt;/&gt;</span>
				</div>
				<span class="hidden text-lg font-bold sm:inline">Paul Mbui</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-8 md:flex">
				{#each navItems as item}
					<a
						href={item.href}
						class="font-medium text-gray-400 transition-colors hover:text-emerald-400 {$page.url
							.pathname === item.href
							? 'text-emerald-400'
							: ''}"
					>
						{item.label}
					</a>
				{/each}
				<a
					href="#contact"
					class="rounded-lg bg-emerald-500 px-6 py-2 font-semibold text-black transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50"
				>
					Let's Talk
				</a>
			</div>

			<!-- Mobile menu button -->
			<button
				on:click={toggleMenu}
				class="text-gray-400 transition-colors hover:text-emerald-400 md:hidden"
				aria-label="Toggle menu"
			>
				{#if isOpen}
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if isOpen}
			<div class="mt-4 space-y-3 border-t border-emerald-500/20 pt-4 pb-4 md:hidden">
				{#each navItems as item}
					<a
						href={item.href}
						on:click={() => (isOpen = false)}
						class="block py-2 font-medium text-gray-400 transition-colors hover:text-emerald-400"
					>
						{item.label}
					</a>
				{/each}
				<a
					href="#contact"
					on:click={() => (isOpen = false)}
					class="block rounded-lg bg-emerald-500 px-6 py-2 text-center font-semibold text-black transition-all hover:bg-emerald-400"
				>
					Let's Talk
				</a>
			</div>
		{/if}
	</div>
</nav>

<style>
	:global(body) {
		padding-top: 64px;
	}
</style>
