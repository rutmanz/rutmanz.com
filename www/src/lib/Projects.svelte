<script lang="ts" context="module">
    import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
    type Link = {text:string, url:string, icon?:IconDefinition}
	export type Project = { title: string; tags: string[]; description: string; links: Link[] };
</script>

<script lang="ts">
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    const {projects}:{projects:Project[]} = $props()
</script>

{#snippet projectCard({ title, tags, description, links }:Project)}
	<div class="flex flex-col justify-between group mx-3 lg:m-0 p-6 rounded-xl border-2 border-slate-300 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-300/50 transition-shadow duration-300">
        <div>
		<h4 class="text-xl text-center font-bold">
			{title}
		</h4>
		<hr class="my-4" />
		<p class="text-center">{description}</p>
		<div class="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
			{#each tags as tag}
				<div class="px-4 py-1 border-2 rounded-full">{tag}</div>
			{/each}
		</div>
    </div>
    <div>
        <hr class="mb-4" />
		<div class="w-full text-center flex flex-wrap flex-row justify-center items-center gap-2 ">
            {#each links as link}
			<a target="_blank" href={link.url} class="rounded-lg">
				<div class="hover:bg-purple-700 hover:border-purple-700 hover:text-white transition-colors duration-300 px-4 py-1 border-2 rounded-lg flex flex-row align-middle items-center gap-2">
					<span>{link.text}</span>
					<FontAwesomeIcon icon={link.icon ?? faGithub} />
				</div>
			</a>
            {/each}
		</div>
        </div>
	</div>
{/snippet}

<div>
	<h3 class="mt-20 text-2xl md:text-4xl text-center font-extrabold">History</h3>
    <div class="mt-5 mx-auto grid grid-cols-1 lg:grid-cols-2 grid-flow-row max-w-4xl gap-6">
	{#each projects as project}
		{@render projectCard(project)}
	{/each}
</div>
</div>
