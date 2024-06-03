<script lang="ts" context="module">
	import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';

	type Link = { text: string; url: string; icon?: IconDefinition };
	export type Project = { title: string; tags: Tag[]; description: string; links: Link[] };
	const colors = {
		"red": "bg-red-50 border-red-100",
		"orange": "bg-orange-50 border-orange-100",
		"yellow": "bg-yellow-50 border-yellow-100",
		"green": "bg-green-50 border-green-100",
		"blue": "bg-blue-50 border-blue-100",
		"purple": "bg-purple-50 border-purple-100"
	} as const
	export type Tag = {text:string, color:keyof typeof colors}
</script>

<script lang="ts">
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	const { projects }: { projects: Project[] } = $props();
</script>

{#snippet projectCard({ title, tags, description, links }: Project)}
	<div class="group mx-3 flex flex-col justify-between rounded-xl border-2 border-slate-300 p-6 transition-shadow duration-300 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-300/50 lg:m-0">
		<div>
			<h4 class="text-center text-xl font-bold">
				{title}
			</h4>
			<hr class="my-4" />
			<p class="text-center">{description}</p>
			<div class="mb-8 mt-4 flex flex-wrap items-center justify-center gap-2">
				{#each tags as tag}
					<div class="rounded-full border-2 px-4 py-1 {colors[tag.color]}">{tag.text}</div>
				{/each}
			</div>
		</div>
		<div>
			<hr class="mb-4" />
			<div class="flex w-full flex-row flex-wrap items-center justify-center gap-2 text-center">
				{#each links as link}
					<a target="_blank" href={link.url} class="rounded-lg">
						<div class="flex flex-row items-center gap-2 rounded-lg border-2 px-4 py-1 align-middle transition-colors duration-300 hover:border-purple-700 hover:bg-purple-700 hover:text-white">
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
	<h3 class="mt-20 text-center text-2xl font-extrabold md:text-4xl">History</h3>
	<div class="mx-auto mt-5 grid max-w-4xl grid-flow-row grid-cols-1 gap-6 lg:grid-cols-2">
		{#each projects as project}
			{@render projectCard(project)}
		{/each}
	</div>
</div>
