<script lang="ts">
	import { onMount } from 'svelte';
	function processColor(color:string) {
		return color.toLowerCase().replace("#", "")
	}
	onMount(() => {
		const form = document.getElementById('options')!;
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const data = new FormData(e.target as HTMLFormElement)
			window.location.href=`/tools/checkerboard/render?s=${data.get("size")}&a=${processColor(data.get("colorA")! as string)}&b=${processColor(data.get("colorB")! as string)}`
		});
	});
</script>
<form id="options" class="flex flex-col max-w-xl mx-auto p-5 m-3 rounded-xl border-amber-500 border-2">
	<input name="size" placeholder="Size (px)" required class="w-30 rounded-lg bg-amber-100 border-2 border-amber-200 p-1" type="number" />
	<div class="flex flex-row gap-3 pt-3">
		<input name="colorA" required class="w-full h-10" type="color" value="#0000aa"/>
		<input name="colorB" required class="w-full h-10" type="color" value="#aa0000"/>
	</div>
	<input type="submit" class="bg-amber-200 rounded-xl p-2 m-2 transition-colors duration-300 hover:bg-amber-400 active:bg-amber-500 cursor-pointer" />
</form>
