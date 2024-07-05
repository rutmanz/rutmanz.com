<script lang="ts">
	import { onMount } from 'svelte';
	function processColor(color:string) {
		return color.toLowerCase().replace("#", "")
	}
	onMount(() => {
		document.body.className = "bg-amber-100"
		const form = document.getElementById('options')!;
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const data = new FormData(e.target as HTMLFormElement)
			window.location.href=`./checkerboard/render?s=${data.get("size")}&a=${processColor(data.get("colorA")! as string)}&b=${processColor(data.get("colorB")! as string)}`
		});
	});
</script>
<div class="flex justify-center items-center w-screen h-screen bg-amber-100">
	<form id="options" class="mx-auto flex w-[32rem] h-max flex-col rounded-xl border-2 border-amber-500 p-5 bg-amber-200">
		<h1 class="text-center w-full text-2xl font-bold pb-4">Checkerboard Options</h1>
		<div class="flex flex-row gap-3 pt-3 items-center">
			<input name="size" required class="h-10 w-full indent-3 rounded-sm bg-amber-300 outline-amber-400 placeholder-amber-600" type="number" placeholder="Size (px)..." />
		</div>
	<div class="flex flex-row gap-3 pt-3">
		<input name="colorA" required class="w-full h-10" type="color" value="#0000aa"/>
		<input name="colorB" required class="w-full h-10" type="color" value="#aa0000"/>
	</div>
	<input type="submit" class="bg-amber-300 rounded-xl p-2 mt-4 transition-colors duration-300 hover:bg-amber-400 active:bg-amber-500 cursor-pointer" value="Render" />
</form>
</div>