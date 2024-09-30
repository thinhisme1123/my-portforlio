import ProfileImg from '/assets/img/profilelogo.png'
import '../../style/body/Home.css'
import '../../style/all/All.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import ButtonLink from '../parts/Buttons'

function Home() {
    return (
        <>
            <div className="grid home-container">
                <div className="home-picture">
                    <img src={ProfileImg} alt="Profile" />
                    <ul className="icon-contact">
                        <li className='icon-contact-item'>
                            <a className='icon-contact-item_link' href="https://www.linkedin.com/in/th%E1%BB%8Bnh-tr%E1%BA%A7n-501b45217/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='icon-contact-item_linkicon' icon={faLinkedin} size="2x" />
                            </a>
                        </li>
                        <li className='icon-contact-item'>
                            <a className='icon-contact-item_link' href="https://github.com/thinhisme1123" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='icon-contact-item_linkicon' icon={faGithub} size="2x" />
                            </a>
                        </li>
                        <li className='icon-contact-item'>
                            <a className='icon-contact-item_link' href="https://www.facebook.com/thinhjbeosofficial/?locale=vi_VN" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='icon-contact-item_linkicon' icon={faFacebook} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="home-text">
                    <div className="home-text-intro mt-5">
                        <h1>
                            Hi,
                            <br />
                            I'm <span>Thinh Tran </span> 
                            <br />
                            Full Stack Software Developer
                        </h1>
                    </div>
                    <div className="home-text-button mt-5">
                        <ButtonLink href='#contact' name='Contact'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home