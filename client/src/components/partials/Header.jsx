import '../../style/partials/Header.css'
import '../../style/all/All.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react'

function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

    const setActiveIndexFunciton = (index) => {
        setActiveIndex(index)
        setMenuOpen(false); 
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);  
    };

    return (
        <>
            <div className="grid header-container">
                <div className="header-name">
                    <h3>Thinh Tran</h3>
                </div>
                <div className={`header-secitons ${menuOpen ? 'open' : ''}`}>
                    <ul className="sections-container">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`section-item ${index === activeIndex ? "active" : ""}`}
                                onClick={() => setActiveIndexFunciton(index)}
                            >
                                <a className="section-link" href={`#${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header-section-hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </>
    )
}

export default Header