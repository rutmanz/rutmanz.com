<script context="module" lang="ts">
	import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	export type Skill = {
		name: string;
		icon: IconDefinition;
	};
</script>

<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	const { skills }: { skills: Skill[] } = $props();
</script>

{#snippet card({ name, icon })}
	<div class="w-44 flex-none text-center p-5 rounded-xl border-2 border-gray-300">
		<FontAwesomeIcon {icon} size="2x" />
		<p class="text-xl font-semibold mt-4">{name}</p>
	</div>
{/snippet}

<div class="flex flex-wrap w-full flex-row md:max-w-3xl gap-4 items-center justify-center mx-auto mt-8">
	{#each skills as skill}
		{@render card(skill)}
	{/each}
</div>
