<script>
	import { page } from '$app/stores';
	// eslint-disable-next-line svelte/valid-compile
	const {status, error} = $page
</script>

<div class="min-h-screen px-3 py-10 sm:px-5 flex flex-col justify-center items-center">
	<h1 class="text-4xl md:text-4xl text-center">{status}: {error?.message}</h1>
</div>