<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../style.css';
	import { page } from '$app/stores';
	const { children }: { children: Snippet } = $props();
	// eslint-disable-next-line svelte/valid-compile
	const { title, desc } = $page.data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<link rel="canonical" href={`https://rutmanz.com${$page.url.pathname}`} />
</svelte:head>

<div class="contents font-sans">
	{@render children()}
</div>
