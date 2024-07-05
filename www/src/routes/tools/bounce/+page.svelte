<script lang="ts">
	import { onMount } from 'svelte';
	function processColor(color: string) {
		return color.toLowerCase().replace('#', '');
	}
	onMount(() => {
		const form = document.getElementById('options')!;
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const data = new FormData(e.target as HTMLFormElement);
			window.location.href = `./bounce/render?s=${data.get('size')}&a=${processColor(data.get('colorA')! as string)}&b=${processColor(data.get('colorB')! as string)}`;
		});
	});
</script>

<form id="options" class="m-3 mx-auto flex max-w-xl flex-col rounded-xl border-2 border-amber-500 p-5">
	<input name="size" placeholder="Size (px)" required class="w-30 rounded-lg border-2 border-amber-200 bg-amber-100 p-1" type="number" />
	<div class="flex flex-row gap-3 pt-3">
		<p class="w-full">Box</p>
		<input name="colorA" required class="h-10 w-full" type="color" value="#0000aa" />
	</div>
	<div class="flex flex-row gap-3 pt-3">
		<p class="w-full">Background</p>
		<input name="colorB" required class="h-10 w-full" type="color" value="#101010" />
	</div>
	<input type="submit" class="m-2 cursor-pointer rounded-xl bg-amber-200 p-2 transition-colors duration-300 hover:bg-amber-400 active:bg-amber-500" />
</form>
