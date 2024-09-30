import '../../style/body/Skills.css';
import '../../style/all/All.css';

import {faGithub,faPython,faJava,faReact, faNodeJs, faPhp, faHtml5, faCss3Alt, faJs, faBootstrap,faFlutter} from '@fortawesome/free-brands-svg-icons';
import { faLeaf,faC } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../parts/SectionTitle';
import SkillsData from '../parts/SkillData';

function Skills() {

    const skillDataFE = [
        { name: 'HTML', percentage: '90%', icon: faHtml5 },
        { name: 'CSS', percentage: '85%', icon: faCss3Alt },
        { name: 'JavaScript', percentage: '80%', icon: faJs },
        { name: 'Bootstrap', percentage: '75%', icon: faBootstrap },
        { name: 'jQuery', percentage: '70%', icon: faJs },
        { name: 'React', percentage: '80%', icon: faReact },
    ];

    const skillDataBE = [
        { name: 'NodeJS', percentage: '85%', icon: faNodeJs },
        { name: 'PHP', percentage: '75%', icon: faPhp },
        { name: 'MongoDB', percentage: '75%', icon: faLeaf },
    ]

    const otherSkills = [
        { name: 'C', percentage: '50%', icon: faC },
        { name: 'Java', percentage: '70%', icon: faJava },
        { name: 'Python', percentage: '70%', icon: faPython },
        { name: 'Flutter', percentage: '70%', icon: faFlutter },
    ]

    const otherTools = [
        { name: 'Github', percentage: '75%', icon: faGithub },
    ]

    return (
        <>
            <div className="grid skills-seciton-container">
                <SectionTitle name='Skills' />
                <div className="row skills-infor-container">
                    <div className="skills-infor-item col">
                        <div className="skill-infor-header">
                            <h2>Front End</h2>
                            <p>I have been using JavaScript and its libraries, frameworks <strong>jQuery, React, Redux, Node</strong> for 4 years.</p>
                        </div>
                        {/* Mapping skillData */}
                        {skillDataFE.map((skill, index) => (
                            <SkillsData
                                key={index}  
                                skillData={skill}  
                            />
                        ))}
                    </div>

                    {/* Another section */}
                    <div className="skills-infor-item col">
                        <div className="skill-infor-header">
                            <h2>Back End</h2>
                            <p>I developed the projects during my studying by using <strong>Node.js, PHP, and Python</strong>.</p>
                        </div>
                        {skillDataBE.map((skill, index) => (
                            <SkillsData
                                key={index}  
                                skillData={skill}  
                            />
                        ))}
                    </div>
                </div>
                <div className="row skills-infor-container">
                    <div className="skills-infor-item col">
                        <div className="skill-infor-header">
                            <h2>Other Skills</h2>
                            <p>I have been using JavaScript and its libraries, frameworks <strong>jQuery, React, Redux, Node</strong> for 4 years.</p>
                        </div>
                        {/* Mapping skillData */}
                        {otherSkills.map((skill, index) => (
                            <SkillsData
                                key={index}  
                                skillData={skill}  
                            />
                        ))}
                    </div>

                    {/* Another section */}
                    <div className="skills-infor-item col">
                        <div className="skill-infor-header">
                            <h2>Orther Tools</h2>
                            <p>I developed the projects during my studying by using <strong>Node.js, PHP, and Python</strong>.</p>
                        </div>
                        {otherTools.map((skill, index) => (
                            <SkillsData
                                key={index}  
                                skillData={skill}  
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
