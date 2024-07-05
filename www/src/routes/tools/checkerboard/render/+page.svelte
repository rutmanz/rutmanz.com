<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		const params = new URLSearchParams(window.location.search)
		const size = parseInt(params.get("s")!)
		if (!isFinite(size)) {
			return
		}
		document.body.style.overscrollBehavior = "none"
		const canvas = document.getElementById("canvas") as HTMLCanvasElement
		canvas.width = canvas.clientWidth
		canvas.height = canvas.clientHeight
		const ctx = canvas.getContext("2d")!
		ctx.fillStyle=`#${params.get("a")}`
		ctx.fillRect(0,0,canvas.width, canvas.height)
		ctx.fillStyle=`#${params.get("b")}`
		for (let c = 0; c < canvas.width; c+=size) {
			const isEven = (c/size) % 2 == 0
			for (let r = isEven ? 0 : size; r<canvas.height;r+=size*2) {
				ctx.fillRect(c,r, size, size)
			}
		}
	})
</script>
<canvas id="canvas" class="w-screen h-screen absolute top-0 bottom-0 left-0 right-0 overscroll-none">

</canvas>