import type { Project, Tag } from '$lib/components/Projects.svelte';
import { faChrome, faFirefox, faFirefoxBrowser, faGithub, faSketch } from '@fortawesome/free-brands-svg-icons';
import { faFile, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { default as hephaestus } from "$lib/img/projects/hephaestus.webp"
import { default as gradescope } from "$lib/img/projects/gradescope.webp"
import { default as fowlfield } from "$lib/img/projects/fowlfield.webp"
import { default as lamp } from "$lib/img/projects/lamp.webp"
const tags = {
	java: { text: 'Java', color: 'red' },
	ts: { text: 'Typescript', color: 'blue' },
	go: { text: 'Go', color: 'cyan' },
	node: { text: 'Node.js', color: 'green' },
	mongo: { text: 'MongoDB', color: 'green' },
	react: { text: 'ReactJS', color: 'blue' },
	embedded: { text: "Embedded", color: "cyan" }
} as const satisfies Record<string, Tag>;

export const projects: Project[] = [
	{
		title: 'NudgeLamps',
		tags: [tags.embedded],
		description: "Pair of lamps using WS2812B LED strips controlled by a wifi-enabled ESP32 using MQTT to synchronize state and send messages",
		links: [
			{ text: "CAD", url: "https://cad.onshape.com/documents/faffb1e635df7690d141c702/w/b5c1c528dd0313d56d0b3383/e/15d555021c6b107d917b7bce", icon: faFile },
			{ text: "GitHub", url: "https://github.com/rutmanz/NudgeLamp", icon: faGithub }
		],
		images: [{ src: lamp, alt: "Photo of assembled lamp" }]
	},
	{
		title: 'Gradescope Assignment Overview',
		tags: [tags.ts, tags.react],
		description: "Browser extension to provide an overview of Gradescope assignments for every registered course. Allows students to more easily view their assigned work and status.",
		links: [
			{ text: "Chrome", url: "https://chromewebstore.google.com/detail/mkbgnablgccihmifmlognlcbhpmgepgp", icon: faChrome },
			{ text: 'Firefox', url: 'https://addons.mozilla.org/en-US/firefox/addon/gradescope-assignment-overview/', icon: faFirefoxBrowser },
			{ text: 'GitHub', url: 'https://github.com/rutmanz/gradescope-assignment-overview', icon: faGithub }
		],
		images: [{ src: gradescope, alt: "Screenshot of extension" }]
	},
	{
		title: 'Uh... Patchy',
		tags: [],
		description: "Working HTTPS 1.1 server implemented from scratch with support for TLS, caching, and connection reuse. Written for Computer Science Independent Study course.",
		links: [
			// {text: "GitHub", url: "https://github.com/rutmanz/uhpatchy", icon: faGithub},
		],
		images: []
	},
	{
		title: 'SQLiter',
		tags: [],
		description: "Working SQLite-style database implemented from scratch, including database VM for query evaluation, cross-filesystem portability, and B-tree-based indexing. Written for Computer Science Independent Study course.",
		links: [
			// {text: "GitHub", url: "https://github.com/rutmanz/sqliter", icon: faGithub},
		],
		images: []
	},
	{
		title: 'FRC Team 1540 - Fowlfield',
		tags: [tags.node, tags.ts, tags.go, tags.mongo],
		description: 'Built event management software in Go and JS for our team\'s off-season event ([BunnyBots](https://team1540.org/bunnybots)) to control robots, match scoring and webcasts, integrating with external APIs and the FRC control system. Used websockets to communicate in real time between webpages, indicator lights, physical buttons, scoring tablets, and backend systems. Supports event of over 500 students every year',
		links: [
			{ text: '2022', url: 'https://github.com/flamingchickens1540/bawk-board', icon: faGithub },
			{ text: '2023+', url: 'https://github.com/flamingchickens1540/fowlfield', icon: faGithub }
		],
		images: [{ src: fowlfield, alt: "Screenshot of stream overlay during the 2023 event" }]
	},
	{
		title: 'FRC Team 1540 - CLUCK Time Tracking',
		tags: [tags.node, tags.ts],
		description: 'Rebuilt a system for tracking team member hours using Slack, Google Sheets, and a custom web interface. Used Jest for unit testing and Node.js with Typescript for the backend',
		links: [
			{ text: 'Github', url: 'https://github.com/flamingchickens1540/CLUCK', icon: faGithub }
		],
		images: [{ src: "https://github.com/user-attachments/assets/1cbaee67-7ab1-4e45-9774-339cd8300b24", alt: "Screenshot of synced spreadsheet" }]
	},
	{
		title: 'FRC Team 1540 - Robot Code',
		tags: [tags.java],
		description: "Manager of Team 1540's robot software department, writing code to control 120lb robots autonomously and with driver input",
		links: [
			{ text: '2022', url: 'https://github.com/flamingchickens1540/toothless', icon: faGithub },
			{ text: '2023', url: 'https://github.com/flamingchickens1540/pesto', icon: faGithub },
			{ text: '2024', url: 'https://github.com/flamingchickens1540/robot2024', icon: faGithub },
			{ text: '2025', url: 'https://github.com/flamingchickens1540/robot2025', icon: faGithub }
		],
		images: [{ src: hephaestus, alt: "2026 Robot" }]
	},


	// {
	// 	title: 'Chrome Extensions',
	// 	tags: [tags.ts],
	// 	description: "Created chrome extensions for interfacing with my school's LMS and with Google Drive to increase usability",
	// 	links: [
	// 		{ text: 'Class Directories', url: '/go/veracrossclassdirectories', icon: faPuzzlePiece }
	// 		// { text: 'Gradescope Overview', url: 'https://github.com/flamingchickens1540/CLUCK' }
	// 	]
	// }
];
