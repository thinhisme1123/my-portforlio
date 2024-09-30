import '../../style/all/All.css';
import '../../style/body/Project.css'

function ProjectItem({RepoData}) {
    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const year = date.getUTCFullYear().toString().slice(-2);
        return `${day}-${month}-${year}`;
      };
    return (
        <>
            <a className='project-item-link' href={RepoData.html_url}> 
                <hr className='hrdark' />
                <div className="project-item">
                    <div className="project-item-left">
                        <h3 className="project-item-repoName">{RepoData.name}</h3>
                        <p className="project-item-repoDesc">{RepoData.description}</p>
                        <div className="project-item-infor">
                            <span className='project-techuse'>{RepoData.language}</span>
                            <span className='project-updatetime'>Cập nhật lúc <span className='project-timevalue'>{formatDate(RepoData.updated_at)}</span></span>
                        </div>
                    </div>
                    <div className="project-item-right">
                        <h6>Star: <span>{RepoData.stargazers_count}</span></h6>
                    </div>
                </div>
            </a>
        </>
    )
}
export default ProjectItem