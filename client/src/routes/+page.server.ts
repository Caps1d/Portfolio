type Repo = {
  name: string;
  description: string;
  html_url: string;
};

export const config = {
  runtime: 'edge'
};

export async function load() {
  const response = await fetch('https://api.github.com/users/Caps1d/repos');
  const repos: Repo[] = await response.json();

  return { repos };
}
