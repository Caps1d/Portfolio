// place files you want to import through the `$lib` alias in this folder.

type Project = {
  id: string;
  type: string;
  name: string;
  description: string;
  status: Status;
  year: string;
};

export type Status = 'completed' | 'in-progress' | 'archived';

export let projects: Project[] = [
  {
    id: 'proj-1',
    type: 'data',
    name: 'WarHazard',
    description: 'Armed conflict data visualization',
    status: 'completed',
    year: '2023'
  },
  {
    id: 'proj-2',
    type: 'web',
    name: 'SnippetBox',
    description: 'Blog-like web app written in Go',
    status: 'completed',
    year: '2023'
  },
  {
    id: 'proj-3',
    type: 'web',
    name: 'GoShip',
    description: 'Deployment tool written in Go',
    status: 'in-progress',
    year: '2024'
  }
];
