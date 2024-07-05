<script lang="ts">
	import { onMount } from 'svelte';
	class Point2d {
		constructor(public x:number, public y:number) {
		}
		static fromValues(v:[number, number]) {
			return new Point2d(v[0],v[1])
		}
		// example methods
		moveBy(vector:Vector2d) {
			this.x +=vector.x
			this.y += vector.y
			return this
		}
		clamp(maxX:number, maxY:number, offset:number=0) {
			const x = this.x
			const y = this.y
			this.x = Math.min(Math.max(offset,x), maxX-offset)
			this.y = Math.min(Math.max(offset,y), maxY-offset)
			return {
				xCollide:this.x != x,
				yCollide:this.y != y,
			}
		}
	}
	class Vector2d {
		constructor(public x:number, public y:number) {
		}
		static fromValues(v:[number, number]) {
			return new Vector2d(v[0],v[1])
		}
		// example methods
		length() {
			return Math.sqrt(this.x*this.x+this.y*this.y)
		}
		multiplied(scalar:number) {
			return new Vector2d(this.x*scalar, this.y*scalar)
		}
		normalized() {
			return this.multiplied(1/this.length())
		}
	}
	onMount(() => {
		const params = new URLSearchParams(window.location.search)
		const size = parseInt(params.get("s")??"")
		if (!isFinite(size) || !params.has("a") || !params.has("b")) {
			window.location.href ="./"
			return
		}
		document.body.style.overscrollBehavior = "none"
		const canvas = document.getElementById("canvas") as HTMLCanvasElement
		canvas.width = canvas.clientWidth
		canvas.height = canvas.clientHeight
		window.addEventListener("resize", () => {
			canvas.width = canvas.clientWidth
			canvas.height = canvas.clientHeight
			point.clamp(canvas.width-size, canvas.height-size, 1)
		})
		const ctx = canvas.getContext("2d")!
		let vect = new Vector2d(Math.random()-0.5, Math.random()-0.5).normalized()
		let point = new Point2d((canvas.width-size)/2, (canvas.height-size)/2)
		let hasWon = false
		const animate = (total_ms:number, delta_ms:number) => {
			ctx.fillStyle=`#${params.get("b")}`
			ctx.fillRect(0,0,canvas.width, canvas.height)
			if (hasWon) {
				ctx.fillStyle=`HSL(${(total_ms/10)%360},100%, 50%)`
			} else {
				ctx.fillStyle=`#${params.get("a")}`
			}
			const collisions = point.moveBy(vect.multiplied((delta_ms)/5)).clamp(canvas.width-size, canvas.height-size)
			if (collisions.xCollide) {
				vect.x = -vect.x
			}
			if (collisions.yCollide) {
				vect.y = -vect.y
			}
			if (collisions.xCollide && collisions.yCollide) {
				hasWon = true
			}
			ctx.fillRect(Math.round(point.x), Math.round(point.y), size, size)
			// console.log(point)
			requestAnimationFrame((t) => animate(t, t-total_ms))
		}
		animate(0, 0)
	})
</script>
<canvas id="canvas" class="w-screen h-screen absolute top-0 bottom-0 left-0 right-0 overscroll-none">

</canvas>