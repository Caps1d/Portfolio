// place files you want to import through the `$lib` alias in this folder.

type Project = {
	id: string;
	type: string;
	name: string;
	description: string;
	status: Status;
	year: string;
	link: string;
	hasPage: bool;
};

export type Status = 'completed' | 'in-progress' | 'archived';

export let projects: Project[] = [
	{
		id: 'proj-1',
		type: 'data',
		name: 'WarHazard',
		description: 'Armed conflict data analysis & visualization',
		status: 'completed',
		year: '2023',
		link: 'https://www.warhazard-ua.com/',
		hasPage: true
	},
	{
		id: 'proj-2',
		type: 'web',
		name: 'SnippetWall',
		description: 'Blog-like web app written in Go',
		status: 'completed',
		year: '2023',
		link: 'https://github.com/Caps1d/Lets-Go/tree/main',
		hasPage: false
	},
	{
		id: 'proj-3',
		type: 'web',
		name: 'GoShip',
		description: 'Deployment tool written in Go',
		status: 'in-progress',
		year: '2024',
		link: '',
		hasPage: false
	}
];
