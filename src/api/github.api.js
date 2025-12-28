// src/api/github.api.js

const GITHUB_USERNAME = "Hansi-Umayangani";

export async function fetchGitHubRepos() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  const data = await response.json();
  console.log("GitHub API data:", data);

  return data;
}
