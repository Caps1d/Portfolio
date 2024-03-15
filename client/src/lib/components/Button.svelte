<button>
	<slot />
	{#if $$slots.bilbo}
		<div class="bg-sky-500">
			<slot name="bilbo" />
		</div>
	{/if}
</button>
