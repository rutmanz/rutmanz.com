import type { Project, Tag } from '$lib/components/Projects.svelte';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

const tags: Record<string, Tag> = {
	java: { text: 'Java', color: 'red' },
	ts: { text: 'Typescript', color: 'blue' },
	go: { text: 'Go', color: 'cyan' },
	node: { text: 'Node.js', color: 'green' },
	jest: { text: 'Jest', color: 'red' },
	mongo: { text: 'MongoDB', color: 'green' }
};

export const projects: Project[] = [
	{
		title: 'FRC Team 1540 - Robot Code',
		tags: [tags.java],
		description: "Manager of Team 1540's robot software department, writing code to control 120lb robots autonomously and with driver input since 2022",
		links: [
			{ text: '2022', url: 'https://github.com/flamingchickens1540/toothless' },
			{ text: '2023', url: 'https://github.com/flamingchickens1540/pesto' },
			{ text: '2024', url: 'https://github.com/flamingchickens1540/robot2024' }
		]
	},
	{
		title: 'FRC Team 1540 - Timesheet',
		tags: [tags.node, tags.ts, tags.jest],
		description: 'Rebuilt a system for tracking team member hours using Slack, Google Sheets, and a custom web interface. Used Jest for unit testing and Node.js with Typescript for the backend',
		links: [
			{ text: 'Slack Bot', url: 'https://github.com/flamingchickens1540/slack-time-bot' },
			{ text: 'Backend', url: 'https://github.com/flamingchickens1540/CLUCK' }
		]
	},
	{
		title: 'FRC Team 1540 - Event Management Software',
		tags: [tags.node, tags.ts, tags.go, tags.mongo],
		description: 'Built event management software in Go and JS for our off-season event ([BunnyBots](https://team1540.org/bunnybots)) to control robots, match scoring and webcasts, integrating with external APIs and the FRC control system. Used websockets to communicate in real time between webpages, indicator lights, physical buttons, scoring tablets, and backend systems',
		links: [
			{ text: '2022', url: 'https://github.com/flamingchickens1540/bawk-board' },
			{ text: '2023+', url: 'https://github.com/flamingchickens1540/fowlfield' }
		]
	},
	{
		title: 'Chrome Extensions',
		tags: [tags.ts],
		description: "Created chrome extensions for interfacing with my school's LMS and with Google Drive to increase usability",
		links: [
			{ text: 'Class Directories', url: '/redirect/veracrossclassdirectories', icon: faPuzzlePiece }
			// { text: 'Backend', url: 'https://github.com/flamingchickens1540/CLUCK' }
		]
	}
];
