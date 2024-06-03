import type { Project, Tag } from '$lib/components/Projects.svelte';

const tags: Record<string, Tag> = {
	java: { text: 'Java', color: 'red' },
	ts: { text: 'Typescript', color: 'blue' },
	node: { text: 'Node.js', color: 'green' },
	jest: { text: 'Jest', color: 'red' }
};

export const projects: Project[] = [
	{
		title: 'FRC Team 1540 - Robot Code',
		tags: [tags.java],
		description: "Manager of Team 1540's robot software department, writing code for 120lb robots since 2022",
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
		title: 'Chrome Extensions',
		tags: [tags.ts],
		description: 'Rebuilt a system for tracking team member hours using Slack, Google Sheets, and a custom web interface. Used Jest for unit testing and Node.js with Typescript for the backend',
		links: [
			{ text: 'Class Directories', url: 'https://github.com/flamingchickens1540/slack-time-bot' },
			{ text: 'Backend', url: 'https://github.com/flamingchickens1540/CLUCK' }
		]
	}
];
