import '../../style/partials/Footer.css'
import { useState } from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {

    return (
        <>
            <div className="footer-container">
                <div className="footer-section-container">
                    <div className="footer-item footer-name">
                        <h1>Thinh Tran</h1>
                    </div>
                    <div className="footer-item footer-infor">
                        <a className='footer-infor_link' href="https://www.linkedin.com/in/th%E1%BB%8Bnh-tr%E1%BA%A7n-501b45217/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='footer-infor_linkicon' icon={faLinkedin} size="2x" />
                        </a>
                        <a className='footer-infor_link' href="https://github.com/thinhisme1123" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='footer-infor_linkicon' icon={faGithub} size="2x" />
                        </a>
                    </div>
                    <div className="footer-item footer-copyright">
                        <p>© 2024 copyright Thinh Tran</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header