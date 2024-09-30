import '../../style/all/All.css';
import '../../style/body/Project.css'
import { useState, useEffect } from 'react';
import SectionTitle from '../parts/SectionTitle';
import ProjectItem from '../parts/ProjectItem';
import {fetchGithubRepos } from '../../util/RepoApi'

function Project() {

    const [repos, setRepos] = useState([]); // State to store repo data
    const [loading, setLoading] = useState(true); // State to track loading

    // Fetch repos on component mount
    useEffect(() => {
        async function getRepos() {
            const repoData = await fetchGithubRepos(); // Fetch data using the utility function
            if (repoData) {
                setRepos(repoData); // Store the repo data in state
            }
            setLoading(false); // Set loading to false after data is fetched
        }

        getRepos();
    }, []);

    return(
        <>
            <div className="project-section-container">
                <SectionTitle name='Projects' />
                <div className="project-container">
                    {/* list Project Item here */}
                    {loading ? (
                        <p>Loading...</p> // Show a loading indicator while fetching
                    ) : (
                        repos.map((repo) => (
                            <ProjectItem key={repo.id} RepoData={repo} /> // Render ProjectItem for each repo
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default Project