<script>
	import { page } from '$app/stores';
	// eslint-disable-next-line svelte/valid-compile
	const { status, error } = $page;
</script>

<div class="flex min-h-screen flex-col items-center justify-center px-3 py-10 sm:px-5">
	<h1 class="text-center text-4xl md:text-4xl">{status}: {error?.message}</h1>
</div>
