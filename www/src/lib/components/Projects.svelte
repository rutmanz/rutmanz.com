<script lang="ts" context="module">
	import { faLink, type IconDefinition } from '@fortawesome/free-solid-svg-icons';

	type Link = { text: string; url: string; icon?: IconDefinition };
	type Image = { src:string, alt:string}
	export type Project = { title: string; tags: Tag[]; description: string; links: Link[], images: Image[] };
	const colors = {
		red: 'bg-red-50 border-red-100',
		orange: 'bg-orange-50 border-orange-100',
		yellow: 'bg-yellow-50 border-yellow-100',
		green: 'bg-green-50 border-green-100',
		cyan: 'bg-cyan-50 border-cyan-100',
		blue: 'bg-blue-50 border-blue-100',
		purple: 'bg-purple-50 border-purple-100',
		gray: 'bg-gray-50 border-gray-100'
	} as const;
	export type Tag = { text: string; color: keyof typeof colors };
</script>

<script lang="ts">

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import SvelteMarkdown from 'svelte-markdown';
	import { projects } from '$lib/projects';
</script>

{#snippet projectCard({ title, tags, description, links, images }: Project)}
	<div class="group mx-3 grid grid-auto-rows grid-cols-1 md:grid-cols-[2fr_4fr_9rem] divide-x-2  divide-slate-200 justify-between rounded-xl border-2 border-slate-300 transition-shadow duration-300 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-300/50 lg:m-0">
	{#if images.length > 0}
		<div class="max-w-full max-h-full min-h-48 rounded-t-xl md:rounded-none md:rounded-l-xl bg-center bg-clip-border bg-cover" style="background-image:url({images[0].src})">
		<img class="sr-only" src={images[0].src} alt={images[0].alt}>
		</div>
	{/if}
		<div class="p-6 {images.length == 0 ? "md:col-span-2" : ""}">
			<h4 class="text-center text-xl font-bold">
				{title}
			</h4>
			<hr class="my-4" />
			<div class="flex justify-center items-center text-center"><SvelteMarkdown source={description}/></div>
			<!-- <div class="mb-8 mt-4 flex flex-row flex-wrap items-center justify-center gap-2">
				{#each tags as tag}
					<div class="rounded-full border-2 px-4 py-1 {colors[tag.color]}">{tag.text}</div>
				{/each}
			</div> -->
		</div>
		<div class="py-6 px-3 mr-3">
			<div class="flex w-full flex-col items-center justify-center gap-2 ml-2 text-center">
				{#each links as link}
					<a target="_blank" href={link.url} class="rounded-lg w-full flex flex-row justify-center items-center gap-2 rounded-lg border-2 border-slate-400 px-4 py-1 align-middle transition-colors duration-300 hover:border-purple-500 hover:bg-purple-200 ">
							<span>{link.text}</span>
							<FontAwesomeIcon icon={link.icon ?? faLink} />
					</a>
				{/each}
			</div>
		</div>
	</div>
{/snippet}

<div>
	<h3 class="mt-20 text-center text-2xl font-extrabold md:text-4xl">Projects</h3>
	<div class="mx-auto mt-5 grid max-w-4xl grid-flow-row grid-cols-1 gap-6 lg:grid-cols-1">
		{#each projects as project}
			{@render projectCard(project)}
		{/each}
	</div>
</div>
