<script lang="ts">
	import { onMount } from 'svelte';

	const dice: string[] = [
		'AEAN.G',
		'A[SPCO',
		'A.PF.K',
		'OB|OAB',
		'IOTM.C',
		'R-VDEL',
		'LR[IXD',
		'EI.NES',
		'W.GEEH',
		'LNH[RZ',
		'TS|IYD',
		'OWTOAT',
		'ER?TYL',
		'TOESSI',
		'TERWHV',
		'NUIHM.'
	];

	function rerollAnimated() {
		dice.sort(() => Math.random() - 0.5);
		let i = 0
		setInterval(() => {
			if (i > 40) return
			dice.forEach((die, i) => grid.children.item(i)!.children[0].textContent = die[Math.floor(Math.random() * 6)]);
			i++
		}, 50)
	}
	onMount(() => {
		document.body.className = 'bg-teal-100';
		dice.forEach(() => {
			const div = document.createElement('div');
			div.className = 'bg-teal-50 p-2 w-20 h-20 text-center text-4xl font-bold flex align-center justify-center';
			const span = document.createElement("span")
			span.className = "align-middle"
			div.appendChild(span);
			grid.appendChild(div);
		});
		// reroll();
	});
	let grid:HTMLElement
</script>
<div class="flex justify-center items-center w-screen h-screen bg-teal-100 flex-col">
		<h1 class="text-center w-full text-2xl font-bold pb-4">Regex Boggle</h1>
		<div bind:this={grid} class="grid grid-rows-4 grid-cols-4 gap-2 border-2 p-3 border-teal-500"></div>
		<button class="p-2 bg-teal-400 hover:bg-teal-600 transition-colors duration-300 rounded-lg m-2" on:click={rerollAnimated}>Roll Dice</button>
</div>