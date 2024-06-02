import { faBook, faCodeCommit, faNetworkWired, faPlug, faTerminal, faVial } from '@fortawesome/free-solid-svg-icons';
import { faGolang, faJava, faJs, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import type { Skill } from '$lib/components/Skills.svelte';
import svelteIcon from '$lib/icons/svelteIcon.svelte';
import tailwindIcon from '$lib/icons/tailwindIcon.svelte';

export const interests: Skill[] = [
	{ name: 'Wires', icon: faPlug },
	{ name: 'Etymology', icon: faBook },
	{ name: 'Networking', icon: faNetworkWired }
];

export const languages: Skill[] = [
	{ name: 'Go', icon: faGolang },
	{ name: 'JS/TS', icon: faJs },
	{ name: 'Java', icon: faJava },
	{ name: 'Python', icon: faPython },
	{ name: 'Jekyll', icon: faVial },
	{ name: 'Svelte', customIcon: svelteIcon },
	{ name: 'Node.js', icon: faNodeJs },
	{ name: 'Tailwind', customIcon: tailwindIcon }
];

export const tools: Skill[] = [
	{ name: 'Git', icon: faCodeCommit },
	{ name: 'Bash', icon: faTerminal }
	// { name: "AWS", icon: faAws},
	// { name: "Cloudflare", icon: faCloudflare},
];
