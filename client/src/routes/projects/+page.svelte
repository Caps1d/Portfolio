<script lang="ts">
	import { onMount } from 'svelte';
	type project = {};
</script>

<div>
	<!-- buttons - tabs -->
	<div
		class=" flex w-full flex-row justify-center gap-10 px-2 pt-6 md:mx-auto md:max-w-3xl md:pt-1"
	>
		<button>All</button>
		<button>Data</button>
		<button>Web</button>
	</div>
	<!-- grid -->
	<div class="grid grid-rows-3 hover:rounded-md hover:border hover:bg-neutral-800/10"></div>
</div>
