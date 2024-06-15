// place files you want to import through the `$lib` alias in this folder.

type Project = {
  id: string;
  type: string;
  name: string;
  description: string;
  status: Status;
  year: string;
  link: string;
  hasPage: boolean;
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
    link: 'https://snippetwall.yesme.dev/',
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
  },
  {
    id: 'proj-4',
    type: 'web',
    name: 'Babyn Yar Memorial Center',
    description: 'Website and CMS for the Babyn-Yar memorial',
    status: 'completed',
    year: '2023',
    link: 'https://babynyar.org.ua/',
    hasPage: false
  }
];
