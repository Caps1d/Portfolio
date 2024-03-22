<script>
	import '../app.css';
	import { Navlink, MobileMenu } from '$components';
	import { onMount } from 'svelte';
</script>

<svelte:head>
	<link
		rel="preload"
		href="/fonts/inter-var-latin.woff2"
		as="font"
		type="font/woff2"
		crossOrigin="anonymous"
	/>
</svelte:head>

<header class="relative top-0 z-40 w-full">
	<div class="mx-auto max-w-2xl px-4 pt-8">
		<div class="flex w-full justify-between md:hidden">
			<div class="flex items-center justify-center"></div>
			<MobileMenu></MobileMenu>
		</div>
		<div class="hidden w-full justify-center md:flex">
			<div class="flex justify-center rounded-full border border-navy-200/10 bg-white/5 p-1">
				<Navlink href="/">Home</Navlink>
				<Navlink href="/blog">Blog</Navlink>
				<Navlink href="/projects">Projects</Navlink>
				<Navlink href="/github">GitHub</Navlink>
			</div>
		</div>
	</div>
</header>

<div class="px-5 pt-20 md:px-10">
	<slot />
</div>
