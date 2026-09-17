<script lang="ts">
	interface Props { label: string; icon: IconDefinition; link: string}
	
	const { label, icon, link }:Props = $props();
	import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

</script>

<a class="m-1 inline-flex h-15 w-15 items-center justify-center rounded-full p-1 text-xl leading-5 text-gray-800 transition-colors duration-300 hover:bg-gray-800 hover:text-white sm:m-2 sm:h-12 sm:w-12 sm:p-2" href={link} target="_blank">
	<FontAwesomeIcon icon={icon} />
	<span class="sr-only">{label}</span>
</a>
