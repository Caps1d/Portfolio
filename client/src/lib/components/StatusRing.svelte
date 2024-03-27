<script lang="ts">
	import type { Status } from '$lib';

	export let status: Status;
</script>

<div
	class="flex items-center justify-center rounded-full square-4"
	class:completed={status === 'completed'}
	class:inProgress={status === 'in-progress'}
>
	<div class="rounded-full square-2"></div>
</div>

<style lang="postcss">
	.completed {
		@apply bg-green-950/90;
		& div {
			@apply bg-green-400;
		}
	}

	.inProgress {
		@apply bg-purple-950/90;
		@apply animate-pulse;
		& div {
			@apply bg-purple-400;
		}
	}
</style>
