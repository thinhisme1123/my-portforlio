import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../style/body/Skills.css'


function SkillsData({skillData}) {
    return (
        <>
            <div className="skills-data">
                <div className="skills-name">
                    <FontAwesomeIcon className='skills-icon' icon={skillData.icon} size="2x" />
                    <h4>{skillData.name}</h4>
                </div>
                <div className="skills-percentage">
                    <span>{skillData.percentage}</span>
                </div>
                <div style={{width: skillData.percentage}} className="skills-bar">

                </div>
            </div>
        </>
    )
}

export default SkillsData