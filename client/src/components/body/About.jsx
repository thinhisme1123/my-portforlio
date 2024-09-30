import '../../style/body/About.css'
import '../../style/all/All.css'
import AboutImg from '/assets/img/aboutimage.jpg'
import CV from '/assets/cv/CV_Tran_Pham_Gia_Thinh_Developer.pdf'
import ProfileImg from '/assets/img/profilelogo.png'
import ButtonLink from '../parts/Buttons'
import SectionTitle from '../parts/SectionTitle'

function About () {

    
    return ( 
        <>
            <div className="grid contact-seciton-container"> 
                <SectionTitle name='About'/>
                <div className="contact-infor">
                    <div className="contact-infor-text">
                        <h3>Thinh Tran</h3>
                        <p>Graduated from Ton Duc Thang University (TDTU), I have a strong enthusiasm for programming and continuously seek out opportunities to learn and create innovative solutions. .</p>
                        <p>Through various projects and part-time jobs as a Web Developer, I’ve gained hands-on experience in Vietnam's tech industry. My goal is to contribute to the success of those I work with while further expanding my skills and knowledge to develop more useful, efficient applications.</p>
                        <div className="contact-infor-dowloandCV">
                            <ButtonLink href={CV} name='Download Resume' download='Resume'/>
                        </div>
                    </div>
                    <div className="contact-infor-img">
                        <img src={AboutImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default About