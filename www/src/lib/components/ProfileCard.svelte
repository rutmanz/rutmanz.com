<script lang="ts">
	import { default as profile} from '$lib/img/headshot/profile.webp';
	import { default as profile_jpg} from "$lib/img/headshot/profile.jpg" 
	import Badge from './Badge.svelte';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="w-full">
	<div class="mx-auto flex max-w-md flex-col justify-center rounded-xl bg-white p-5 shadow-xl">
		<picture>
			<source type="image/webp" srcset={profile} />
			<source type="image/jpeg" srcset={profile_jpg} />
			<img class="mx-auto h-32 w-32 rounded-full shadow-xl" src={profile_jpg} alt="profile" />
		</picture>
		<div class="mt-5 text-center">
			<h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
				Zach Rutman
			</h1>
			<p class="inline-block w-auto border-b-2 px-5 pb-4 pt-2 text-xs text-gray-600 sm:text-base">
				Student | Developer | Experimenter
			</p>
			<div class="align-center mt-4 flex justify-center">
				<Badge label="Email" icon={faEnvelope} link="mailto:contact@rutmanz.com" />
				<Badge label="GitHub" icon={faGithub} link="https://github.com/rutmanz" />
				<Badge label="LinkedIn" icon={faLinkedin} link="https://www.linkedin.com/in/zachary-rutman/" />
			</div>
		</div>
	</div>
</div>
