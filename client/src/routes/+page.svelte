<script lang="ts">
	import ProfileCard from '$components/ProfileCard.svelte';
	import { projects as _projects } from '$lib';
	import { StatusRing } from '$components';
	import type { PageData } from './$types';

	export let data: PageData;

	let projects = _projects;
	let activeTab = 'all';

	function handleChangeTab(tab: string) {
		activeTab = tab;
		if (tab === 'all') {
			projects = _projects;
			return;
		}
		projects = _projects.filter((p) => p.type === tab);
	}
</script>

<div class="flex flex-col justify-center px-2 pt-4 md:mx-auto md:max-w-3xl md:pt-6">
	<!-- profile card container -->
	<ProfileCard />
	<div class="flex flex-col pt-20">
		<!-- Projects -->
		<div class="">
			<p>Projects</p>
			<!-- buttons - tabs -->
			<div
				class="flex w-full flex-row items-center justify-center gap-5 px-2 pt-6 md:mx-auto md:max-w-3xl md:pt-1"
			>
				<div class="flex gap-5 rounded-full border border-navy-200/10 px-3 py-1">
					<button
						class="tab"
						class:active={activeTab === 'all'}
						on:click={() => handleChangeTab('all')}>All</button
					>
					<button
						class="tab"
						class:active={activeTab === 'data'}
						on:click={() => handleChangeTab('data')}>Data</button
					>
					<button
						class="tab"
						class:active={activeTab === 'web'}
						on:click={() => handleChangeTab('web')}>Web</button
					>
				</div>
			</div>
			<!-- grid -->
			<div class="grid grid-cols-1 pt-2">
				{#each projects as project}
					<div
						class="flex items-center justify-between border-t border-navy-200/10 py-4 first:border-t-transparent"
					>
						<!-- left side  -->
						<div>
							<!-- status & name  -->
							<div class="flex items-center gap-1">
								<StatusRing status={project.status} />
								{#if project.hasPage}
									<a href={project.name.toLowerCase()}>{project.name}</a>
								{:else}
									<p>{project.name}</p>
								{/if}
							</div>
							<!-- desc & year -->
							<div class="flex flex-col gap-1 pt-4 text-sm md:flex-row">
								<p class="hidden text-plain-400 md:flex">{project.description}</p>
								<p class="hidden md:flex">&middot;</p>
								<p class=" text-plain-400">{project.year}</p>
							</div>
						</div>
						<!-- right side   -->
						<div
							class="mx-auto rounded-full border border-navy-200/10 p-2 px-3 text-sm leading-none hover:bg-white/5"
						>
							<a href={project.link}>View Project</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<!-- gitHub repo's -->
		<div class="pt-20">
			<p>My Repo's</p>
		</div>
		<div class="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
			{#each data.repos as repo}
				<a
					href={repo.html_url}
					target="_blank"
					rel="refnoopener"
					class="rounded-md border border-neutral-200/10 p-6 hover:bg-white/5"
				>
					<p>{repo.name}</p>
					{#if repo.description}
						<p class="pt-2 text-plain-400">{repo.description}</p>
					{/if}
				</a>
			{/each}
		</div>
	</div>
	<!-- Connect -->
	<div class="pb-10 pt-20">
		<p>Connect</p>
		<p class="pt-4 text-plain-400">
			Reach me via <a href="https://www.linkedin.com/in/yegor-s/" class="link">LinkedIn</a>
			or
			<a href="mailto:hello@yesme.dev" class="link">email</a>
		</p>
	</div>
</div>

<style lang="postcss">
	.active {
		@apply !opacity-100;
	}

	.tab {
		@apply p-1 opacity-40;
	}

	.link {
		@apply text-sky-200 hover:underline hover:underline-offset-4;
	}
</style>
