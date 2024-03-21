<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	// this is the condition for our class
	$: active = $page.url.pathname === href;
</script>

<!-- apply class active if `active` == True -->
<a {href} class:active>
	<slot />
</a>

<!-- declare the conditional css class -->
<style lang="postcss">
	.active {
		@apply opacity-100;
	}
</style>
