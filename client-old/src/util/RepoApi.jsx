export async function fetchGithubRepos() {
    const username = import.meta.env.VITE_GITHUB_USERNAME;
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    if (!username || !token) {
        console.error('Environment variables not set');
        return null;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `token ${token}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const data = await response.json(); 
        return data;
    } catch (error) {
        console.error('Error fetching repos:', error);
        return null;
    }
}
