<script lang="ts">
	const { img, name, title, github, email }: { img: string; name: string; title: string; github: string; email: string } = $props();
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="w-full">
	<div class="mx-auto flex max-w-xs flex-col justify-center rounded-xl bg-white p-5 shadow-xl">
		<div class="">
			<img class="mx-auto w-32 rounded-full shadow-xl" src={img} alt="Profile face" />
		</div>
		<div class="mt-5 text-center">
			<h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
				{name}
			</h1>
			<p class="inline-block w-auto border-b-2 px-5 pb-4 pt-2 text-xs text-gray-600 sm:text-base">
				{title}
			</p>
			<div class="align-center mt-4 flex justify-center">
				<a class="m-1 rounded-full p-1 text-xl leading-5 text-gray-800 transition-colors duration-300 hover:bg-gray-800 hover:text-white sm:m-2 sm:p-2" href={github}>
					<FontAwesomeIcon icon={faGithub} />
					<span class="sr-only">Github</span>
				</a>
				<a class="m-1 rounded-full p-1 text-xl leading-5 text-gray-800 transition-colors duration-300 hover:bg-gray-800 hover:text-white sm:m-2 sm:p-2" href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + email}>
					<FontAwesomeIcon icon={faEnvelope} />
					<span class="sr-only">Email</span>
				</a>
			</div>
		</div>
	</div>
</div>
