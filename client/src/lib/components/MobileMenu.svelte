<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	const {
		elements: { menu, item, trigger, arrow }
	} = createDropdownMenu();
</script>

<button use:melt={$trigger}>Click me</button>
<div use:melt={$menu} class="w-[70vw] rounded-md border border-navy-200/10 p-5">
	<div use:melt={$item}>...</div>
	<div use:melt={$item}>...</div>
	<div use:melt={$item}>...</div>
	<div use:melt={$arrow} />
</div>
