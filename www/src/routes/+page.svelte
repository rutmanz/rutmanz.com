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
	import {interests, tools, languages} from "$lib/interests"
	import {projects} from "$lib/projects"
</script>

{#snippet about()}
	<div class="max-w-4xl mx-auto mt-16">
		<h2 class="text-2xl md:text-4xl font-bold text-center">About Me</h2>
		<p class="text-base text-left md:text-center text-gray-600 leading-relaxed m-4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus integer feugiat scelerisque varius morbi enim nunc. Pulvinar elementum integer enim neque volutpat. Vestibulum sed arcu non odio euismod lacinia at. Sagittis id consectetur purus ut. In hac habitasse platea dictumst quisque sagittis. Nisi vitae suscipit tellus mauris a. Vitae tortor condimentum lacinia quis vel eros donec. Consectetur purus ut faucibus pulvinar. Hac habitasse platea dictumst quisque sagittis. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Augue lacus viverra vitae congue eu consequat ac. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Nulla facilisi cras fermentum odio eu feugiat. Commodo elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Lobortis mattis aliquam faucibus purus in massa
			tempor. Eu scelerisque felis imperdiet proin fermentum leo vel orci.
		</p>
	</div>
{/snippet}

<div class="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
	<div data-aos="fade-down" data-aos-duration="800">
		<Card img={quokka} name="Zach Rutman" title="Student" github="https://github.com/rutmanz" email="me@rutmanz.com"></Card>
	</div>
	<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
		{@render about()}
		<h3 class="text-xl md:text-2xl mt-8 font-bold text-center">Languages</h3>
		<Skills skills={languages} color="red"/>
		<h3 class="text-xl md:text-2xl mt-8 font-bold text-center">Tools</h3>
		<Skills skills={tools} color="orange"/>
		<h3 class="text-xl md:text-2xl mt-8 font-bold text-center">Enthusiasms</h3>
		<Skills skills={interests} color="green"/>
		<Projects {projects} />
	</div>
</div>
