<script lang="ts" context="module">
	declare global {
		var __COMMIT_DATE__:string
	}
</script>
<script lang="ts">
	import Card from '$lib/components/ProfileCard.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';

	onMount(() => {
		const disableLoadAnimation = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true || navigator.userAgent.indexOf('Chrome-Lighthouse') > -1 || window.location.search.includes('nomotion');
		if (!disableLoadAnimation) {
			AOS.init();
		} else {
			for (const element of document.getElementsByClassName('fades')) {
				(<HTMLElement>element).style.transform = 'none';
				(<HTMLElement>element).style.opacity = '1';
				(<HTMLElement>element).style.transitionProperty = 'none';
			}
		}
	});
	import { interests, tools, languages } from '$lib/interests';
	import { projects } from '$lib/projects';
	import Projects from '$lib/components/Projects.svelte';
</script>

{#snippet about()}
	<div class="mx-auto mt-16 max-w-4xl">
		<h2 class="text-center text-2xl font-bold md:text-4xl">About Me</h2>
		<p class="m-4 text-left text-base leading-relaxed text-gray-600 md:text-center">
			I'm an undergraduate studying Computer Engineering and Materials Science. I love to build things with a purpose, tinker around, and learn new things. I'm currently reading <i>The Iliad</i>, and I recommend Sam Kean's <i>The Disappearing Spoon</i>. Feel free to contact me at the email above.
		</p>
	</div>
{/snippet}

<div class="min-h-screen px-3 py-10 sm:px-5">
		<div class="fades mt-10" data-aos="fade-down" data-aos-duration="800">
			<Card/>
		</div>
	
	<div class="fades" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        {@render about()}
		<Projects/>
		<!-- <h3 class="mt-8 text-center text-xl font-bold md:text-2xl">Languages & Frameworks</h3>
		<Skills skills={languages} color="red" />
		<h3 class="mt-8 text-center text-xl font-bold md:text-2xl">Tools</h3>
		<Skills skills={tools} color="orange" />
		<h3 class="mt-8 text-center text-xl font-bold md:text-2xl">Enthusiasms</h3>
		<Skills skills={interests} color="green" />
		<Projects {projects} />

		<p class="text-md mt-10 text-center italic text-gray-700">More coming soon...</p> -->
	</div>
	<div class="padded"></div>
	<p class="text-md mt-10 text-center italic text-gray-700">You made it!<br>Ask me to tell you the story of John the Jeweler, John the Frequent Flier, or John the Florist</p>
	<p class="text-sm mt-10 text-center text-gray-600">Last Updated {__COMMIT_DATE__}</p> 
</div>

<style>
	.padded {
		height: 100000vh;
	}
	:global(body) {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	:global(body::-webkit-scrollbar) {
		display: none;
	}
</style>
