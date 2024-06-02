<script lang="ts">
	const { img, name, title, github, email }: { img: string; name: string; title: string; github: string; email: string } = $props();
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="w-full">
	<div class="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
		<div class="">
			<img class="w-32 mx-auto shadow-xl rounded-full" src={img} alt="Profile face" />
		</div>
		<div class="text-center mt-5">
			<h1 class="text-xl sm:text-2xl font-semibold text-gray-900">
				{name}
			</h1>
			<p class="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
				{title}
			</p>
			<div class="flex align-center justify-center mt-4">
				<a class="text-xl leading-5 m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href={github}>
					<FontAwesomeIcon icon={faGithub} />
					<span class="sr-only">Github</span>
				</a>
				<a class="text-xl leading-5 m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + email}>
					<FontAwesomeIcon icon={faEnvelope} />
					<span class="sr-only">Email</span>
				</a>
			</div>
		</div>
	</div>
</div>
