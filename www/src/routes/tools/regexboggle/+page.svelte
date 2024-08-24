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

	function startTimer(element: HTMLElement, time: number) {
		let timer = time * 60;
		const interval = setInterval(() => {
			if (timer <= 0) {
				element.parentElement!.classList.add("wiggle")
				clearInterval(interval);
				return
			}
			timer--;
			const minutes = Math.floor(timer / 60);
			const seconds = timer % 60;
			element.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
		}, 1000)
	}

	function startSearchTimer() {
		startTimer(document.querySelector('#timer-5')!, 5)
	}
	function startMatchTimer() {
		startTimer(document.querySelector('#timer-8')!, 8)
	}

	function rerollAnimated() {
		dice.sort(() => Math.random() - 0.5);
		let i = 0;
		const interval = setInterval(() => {
			if (i > 40) {
				startSearchTimer();
				clearInterval(interval);
				return;
			}
			dice.forEach((die, i) => grid.children.item(i)!.children[0].textContent = die[Math.floor(Math.random() * 6)]);
			i++;
		}, 50);
	}

	onMount(() => {
		document.body.className = 'bg-teal-100';
		document.body.addEventListener("click", () => {
			document.querySelectorAll(".wiggle").forEach((el) => el.classList.remove("wiggle"))
		});
		document.body.addEventListener("keydown", () => {
			document.querySelectorAll(".wiggle").forEach((el) => el.classList.remove("wiggle"))
		});
		dice.forEach(() => {
			const div = document.createElement('div');
			div.className = 'bg-teal-50 p-2 w-20 h-20 text-center text-4xl font-bold flex align-center justify-center';
			const span = document.createElement('span');
			span.className = 'align-middle';
			div.appendChild(span);
			grid.appendChild(div);
		});
	});
	let grid: HTMLElement;
</script>
<div class="flex justify-center items-center w-screen h-screen bg-teal-100 flex-col">
	<h1 class="text-center w-full text-2xl font-bold pb-4">Regex Boggle</h1>
	<div class="flex flex-row gap-5 justify-center items-center">
		<div bind:this={grid} class="grid grid-rows-4 grid-cols-4 gap-2 border-2 p-3 border-teal-500"></div>
		<div class="flex flex-col gap-3 items-center justify-center">
			<div class="flex flex-col gap-3 pt-3 items-center justify-center border-2 border-teal-500 p-3">
				<div class="timer w-48 bg-blue-200 text-center p-5 text-3xl"><span id="timer-5">5:00</span></div>
				<div class="timer w-48 bg-green-200 text-center p-5 text-3xl"><span id="timer-8">8:00</span></div>
			</div>
			<div class="flex flex-col gap-3 p-3 items-center justify-center border-2 border-teal-500">
			<button class="w-48 p-2 bg-blue-400 hover:bg-blue-600 transition-colors duration-300 rounded-lg"
							on:click={rerollAnimated}>Roll Dice
			</button>
				<button class="w-48 p-2 bg-green-400 hover:bg-green-600 transition-colors duration-300 rounded-lg"
								on:click={startMatchTimer}>Start Matching
				</button>
				</div>
		</div>
	</div>


</div>

<style>
    @keyframes wiggle {
        0% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(5deg) scale(1.5); }
        50% { transform: rotate(0deg) scale(2); }
        75% { transform: rotate(-5deg) scale(1.5); }
        100% { transform: rotate(0deg) scale(1); }
    }

    :global(.timer.wiggle) {
        display: inline-block;
				animation-timing-function: ease-in-out;
        animation: wiggle 1s infinite;
    }
</style>