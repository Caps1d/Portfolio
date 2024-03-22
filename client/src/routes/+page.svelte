<script lang="ts">
	import ProfileCard from '$components/ProfileCard.svelte';
	import { onMount } from 'svelte';

	type Repo = {
		name: string;
		description: string;
		html_url: string;
	};
	let repos: Repo[] = [];

	onMount(async () => {
		const response = await fetch('https://api.github.com/users/Caps1d/repos');
		repos = await response.json();
		console.log(repos);
	});
</script>

<div class="flex flex-col justify-center px-2 pt-10 md:mx-auto md:max-w-3xl md:pt-32">
	<!-- profile card container -->
	<ProfileCard />
	<!-- gitHub repo's -->
	<div class="flex flex-col pt-10">
		<p>My Repo's</p>
		<div class="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
			{#each repos as repo}
				<a
					href={repo.html_url}
					target="_blank"
					rel="refnoopener"
					class="rounded-md border border-neutral-200/10 p-6 hover:bg-neutral-300/20"
				>
					<p>{repo.name}</p>
					{#if repo.description}
						<p class="pt-2 text-stone-300">{repo.description}</p>
					{/if}
				</a>
			{/each}
		</div>
		<div></div>
	</div>
</div>
