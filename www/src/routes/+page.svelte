<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import quokka from '$lib/img/profile.jpg';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});
	import { interests, tools, languages } from '$lib/interests';
	import { projects } from '$lib/projects';
</script>

{#snippet about()}
	<div class="mx-auto mt-16 max-w-4xl">
		<h2 class="text-center text-2xl font-bold md:text-4xl">About Me</h2>
		<p class="m-4 text-left text-base leading-relaxed text-gray-600 md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Ac orci phasellus egestas tellus. Quis auctor elit sed vulputate mi sit. Quis vel eros donec ac odio. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Consequat id porta nibh venenatis cras sed felis.</p>
	</div>
{/snippet}

<div class="min-h-screen px-3 py-10 sm:px-5">
	<div data-aos="fade-down" data-aos-duration="800">
		<Card img={quokka} name="Zach Rutman" title="Student" github="https://github.com/rutmanz" email="me@rutmanz.com"></Card>
	</div>
	<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
		{@render about()}
		<h3 class="mt-8 text-center text-xl font-bold md:text-2xl">Languages & Frameworks</h3>
		<Skills skills={languages} color="red" />
		<h3 class="mt-8 text-center text-xl font-bold md:text-2xl">Tools</h3>
		<Skills skills={tools} color="orange" />
		<h3 class="mt-8 text-center text-xl font-bold md:text-2xl">Enthusiasms</h3>
		<Skills skills={interests} color="green" />
		<Projects {projects} />

		<p class="text-md mt-10 text-center italic text-gray-500">More coming soon...</p>
	</div>
</div>
