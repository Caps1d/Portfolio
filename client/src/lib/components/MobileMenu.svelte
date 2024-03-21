<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { Component } from 'lucide-svelte';
	import MobileMenuLink from './MobileMenuLink.svelte';
	import { fly } from 'svelte/transition';

	const {
		elements: { trigger, menu, item, arrow, overlay },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		loop: true
	});

	let rotation = 0;
	let button: HTMLButtonElement | undefined;

	$: if ($open && button) {
		rotation += 360;
		button.style.transform = `rotate(${rotation}deg)`;
	}
</script>

<button
	bind:this={button}
	type="button"
	use:melt={$trigger}
	aria-label="Menu"
	class="transition-transform duration-700 ease-in-out"
>
	<div class="flex items-center justify-center rounded-lg square-12 hover:bg-navy-200/10">
		<Component class="square-8" />
	</div>
</button>
{#if $open}
	<div use:melt={$overlay} class="fixed inset-0 z-40" />
	<div class="menu" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
		<div class="item" use:melt={$item}>
			<MobileMenuLink href="/blog">Blog</MobileMenuLink>
		</div>
		<div class="item" use:melt={$item}>
			<MobileMenuLink href="/projects">Projects</MobileMenuLink>
		</div>
		<div class="item" use:melt={$item}>
			<MobileMenuLink href="https://github.com/Caps1d">GitHub</MobileMenuLink>
		</div>
		<div class="item" use:melt={$item}>
			<MobileMenuLink href="/contact">Contact Me</MobileMenuLink>
		</div>
		<div use:melt={$arrow} />
	</div>
{/if}

<style lang="postcss">
	.menu {
		@apply z-40 flex max-h-[400px] min-w-[220px] flex-col shadow-lg;
		@apply rounded-md border border-navy-200/10  p-1 shadow-md lg:max-h-none;
		@apply ring-0 !important;
	}
	.item {
		@apply relative select-none rounded-md py-3 pl-6 pr-1;
		@apply data-[highlighted]:bg-navy-700 data-[highlighted]:opacity-100;
		@apply data-[disabled]:text-neutral-300;
		@apply z-40 outline-none;
		@apply flex items-center text-sm leading-none;
		@apply ring-0 !important;
	}
	.text {
		@apply pl-6 text-xs leading-6 text-neutral-600;
	}
</style>
