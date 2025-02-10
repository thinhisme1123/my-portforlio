import React, { useState, useEffect } from 'react';
import '../../style/body/About.css';
import '../../style/all/All.css';
import AboutImg from '/assets/img/aboutimage.jpg';
import CV from '/assets/cv/CV_Tran_Pham_Gia_Thinh_Developer.pdf';
import ProfileImg from '/assets/img/profilelogo.png';
import ButtonLink from '../parts/Buttons';
import SectionTitle from '../parts/SectionTitle';

function About() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const fullText1 = "Graduated from Ton Duc Thang University (TDTU), I have a strong enthusiasm for programming and continuously seek out opportunities to learn and create innovative solutions.";
    const fullText2 = "Through various projects and part-time jobs as a Web Developer, I've gained hands-on experience in Vietnam's tech industry. My goal is to contribute to the success of those I work with while further expanding my skills and knowledge to develop more useful, efficient applications.";
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [startSecondText, setStartSecondText] = useState(false);
    const typingSpeed = 50; // Faster typing speed for better user experience
    // First paragraph typing effect
    useEffect(() => {
        if (currentIndex1 < fullText1.length) {
            const timeout = setTimeout(() => {
                setText1(fullText1.slice(0, currentIndex1 + 1));
                setCurrentIndex1(currentIndex1 + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        } else {
            setStartSecondText(true); // Start second paragraph when first is done
        }
    }, [currentIndex1]);

    // Second paragraph typing effect
    useEffect(() => {
        if (startSecondText && currentIndex2 < fullText2.length) {
            const timeout = setTimeout(() => {
                setText2(fullText2.slice(0, currentIndex2 + 1));
                setCurrentIndex2(currentIndex2 + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex2, startSecondText]);

    return (
        <div>
            <div className="grid contact-seciton-container">
                <SectionTitle name='About' />
                <div className="contact-infor">
                    <div className="contact-infor-text">
                        <h3>
                            <span className="typing-name">Thinh Tran</span>
                        </h3>
                        <p>
                            {text1}
                            {currentIndex1 < fullText1.length &&
                                <span className="typing-cursor">|</span>}
                        </p>
                        <p>
                            {text2}
                            {startSecondText && currentIndex2 < fullText2.length &&
                                <span className="typing-cursor">|</span>}
                        </p>
                        <div className="contact-infor-dowloandCV">
                            <ButtonLink href={CV} name='Download Resume' download='Resume' />
                        </div>
                    </div>
                    <div className="contact-infor-img">
                        <img src={AboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;