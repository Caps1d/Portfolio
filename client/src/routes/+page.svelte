<script lang="ts">
	import ProfileCard from '$components/ProfileCard.svelte';
	import { onMount } from 'svelte';
	import { Github } from 'lucide-svelte';

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
	<div class="flex flex-col pt-20">
		<!-- gitHub repo's -->
		<div class="flex flex-row justify-start gap-2">
			<Github />
			<p>My Repo's</p>
		</div>
		<div class="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
			{#each repos as repo}
				<a
					href={repo.html_url}
					target="_blank"
					rel="refnoopener"
					class="rounded-md border border-neutral-200/10 p-6 hover:bg-white/5"
				>
					<p>{repo.name}</p>
					{#if repo.description}
						<p class="pt-2 text-stone-300">{repo.description}</p>
					{/if}
				</a>
			{/each}
		</div>
	</div>
	<!-- Now -->
	<div class="pt-20">
		<p>Now</p>
		<p class="pt-4 text-stone-300">Section explaining my developer's path and passion</p>
	</div>
	<!-- Connect -->
	<div class="pb-10 pt-20">
		<p>Connect</p>
		<p class="pt-4 text-stone-300">
			Reach me via <a href="https://www.linkedin.com/in/yegor-s/" class="text-sky-200">LinkedIn</a>
			or
			<a href="ye.smertenko@gmail.com">email</a>
		</p>
	</div>
</div>
