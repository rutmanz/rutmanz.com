import type { Project } from '$lib/components/Projects.svelte';

export const projects: Project[] = [
	{
		title: 'FRC Team 1540 - Robot Code',
		tags: ['Java'],
		description: "Manager of Team 1540's robot software department, writing code for 120lb robots since 2022",
		links: [
			{ text: '2022', url: 'https://github.com/flamingchickens1540/toothless' },
			{ text: '2023', url: 'https://github.com/flamingchickens1540/pesto' },
			{ text: '2024', url: 'https://github.com/flamingchickens1540/robot2024' }
		]
	},
	{
		title: 'FRC Team 1540 - Timesheet',
		tags: ['Node.js', 'Typescript'],
		description: 'Rebuilt a system for tracking team member hours using Slack, Google Sheets, and a custom web interface. Used Jest for unit testing and Node.js with Typescript for the backend',
		links: [
			{ text: 'Slack Bot', url: 'https://github.com/flamingchickens1540/slack-time-bot' },
			{ text: 'Backend', url: 'https://github.com/flamingchickens1540/CLUCK' }
		]
	}
];
