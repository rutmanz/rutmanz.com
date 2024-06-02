<script context="module" lang="ts">
	import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import type { Component } from 'svelte';
	export type Skill = {
		name: string;
		icon?: IconDefinition;
		customIcon?: Component;
	};
	type RegularSkill = Omit<Skill, 'customIcon'>;
	type CustomSkill = Omit<Skill, 'icon'>;
</script>

<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faQuestion } from '@fortawesome/free-solid-svg-icons';
	const { skills, color }: { skills: Skill[]; color?: string } = $props();
</script>

{#snippet card({ name, icon }:RegularSkill)}
	<div class="group h-full w-40 flex-none rounded-xl border-2 border-gray-300 p-5 text-center hover:border-{color}-300 hover:shadow-lg hover:shadow-{color}-300 transition-shadow duration-300">
		<FontAwesomeIcon icon={icon ?? faQuestion} size="2x" />
		<p class="text-md mt-4 font-semibold md:text-lg">{name}</p>
	</div>
{/snippet}

{#snippet cardCustom({ name, customIcon }:CustomSkill)}
	<div class="group h-full w-40 flex-none rounded-xl border-2 border-gray-300 p-5 text-center hover:border-{color}-300 hover:shadow-lg hover:shadow-{color}-300 transition-shadow duration-300">
		<svelte:component this={customIcon} />
		<p class="text-md mt-4 font-semibold md:text-lg">{name}</p>
	</div>
{/snippet}
<div class="mx-auto mt-4 flex w-full flex-row flex-wrap items-center justify-center gap-4 md:max-w-3xl">
	{#each skills as skill}
		{#if skill.icon}
			{@render card(skill)}
		{:else}
			{@render cardCustom(skill)}
		{/if}
	{/each}
</div>
