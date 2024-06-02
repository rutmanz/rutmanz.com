import type { Project } from "$lib/Projects.svelte";
import type { Skill } from "$lib/Skills.svelte";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faCodePullRequest, faChess, faCodeCommit, faTerminal, faPlug, faWifi, faNetworkWired } from "@fortawesome/free-solid-svg-icons";

const projects: Project[] = [
    {
        title: "FRC Team 1540 - Robot Code", tags: ["Java"], description: "Manager of Team 1540's robot software department, writing code for 120lb robots since 2022", links: [
            { text: "2022", url: "https://github.com/flamingchickens1540/toothless" },
            { text: "2023", url: "https://github.com/flamingchickens1540/pesto" },
            { text: "2024", url: "https://github.com/flamingchickens1540/robot2024" },
        ]
    },
    {
        title: "FRC Team 1540 - Timesheet", tags: ["Node.js", "API Integration"], description: "Rewrote ", links: [
            { text: "Slack Bot", url: "https://github.com/flamingchickens1540/slack-time-bot" },
            { text: "Backend", url: "https://github.com/flamingchickens1540/CLUCK" },
        ]
    }
];
const skills:Skill[] = [
    {name:"Code Review", icon:faCodePullRequest},
    {name:"Git", icon:faCodeCommit},
    {name:"Chess", icon:faChess},
    {name:"Node.js", icon:faNodeJs},
    {name:"Bash", icon:faTerminal},
    {name:"Wires",  icon: faPlug},
    {name:"Networking",  icon: faNetworkWired}
]
export async function load(e) {
    return {
        title: "Zach Rutman",
        desc: "Welcome to my homepage",
        projects,
        skills,
    };
}

