import { faChess, faCodeCommit, faCodePullRequest, faNetworkWired, faPlug, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faGolang, faJava, faJs, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import type { Skill } from '$lib/components/Skills.svelte';

export const interests: Skill[] = [
	{ name: 'Code Review', icon: faCodePullRequest },
	{ name: 'Chess', icon: faChess },
	{ name: 'Wires', icon: faPlug },
	{ name: 'Networking', icon: faNetworkWired }
];

export const languages:Skill[] = [
	{ name: 'Go', icon: faGolang },
	{ name: 'JS/TS', icon: faJs },
	{ name: 'Java', icon: faJava },
	{ name: 'Python', icon: faPython}
]

export const tools:Skill[] = [
	{ name: 'Git', icon: faCodeCommit },
	{ name: 'Node.js', icon: faNodeJs },
	{ name: 'Bash', icon: faTerminal },
]