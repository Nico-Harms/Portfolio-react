import React from 'react';
import HovereffectProjects from '../components/HovereffectsProjects.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faReact, faCss3Alt, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import aboutMePicture from '../assets/aboutmepicture.png';
import contactpicture from '../assets/contactmepicture.webp';
import profilePicture from '../assets/profilepicture.png';
import BlobSvg from '../components/BlobSvg.jsx';
import ChaningText from '../components/ChaningText.jsx';
import Footer from '../components/Footer.jsx';
import SlideInOnScroll from '../components/SlideInOnScroll.jsx';


export default function Home() {
  return (
    <div className='siteWrapper'>

      <main className="mainWrapper">
        <div className='textToPictureWrapper'>
          <div className='textWrapperMain'>
            <SlideInOnScroll direction={'left'}>

              <div className='headerContainer'>
                <h2 className='mainHeaderDesktop'>Hej, jeg er Nicolai!</h2>

                <h3>Front-End Developer med passion for inaktive løsninger og design</h3>
                <div className='soMe'>
                  <a className='github' href="#"><FontAwesomeIcon icon={faGithub} /></a>
                  <a className='linkedin' href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
              </div>
            </SlideInOnScroll>
          </div>
          <SlideInOnScroll direction={'right'}>
            <div className='svgHeaderWrapper'>
              <h2 className='mainHeaderMobile'>Hej, jeg er Nicolai!</h2>
              <BlobSvg profilePicture={profilePicture} />
            </div>
          </SlideInOnScroll>
        </div>


        <div className='techStack'>
          <h5 className='techHeader'>Tech Stack</h5>
          <hr className='techHr' />
          <SlideInOnScroll direction={'bottom'}>
            <div className='techIconWrapper'>
              <FontAwesomeIcon className='techStackIcon' color='#f06529' icon={faHtml5} />
              <FontAwesomeIcon className='techStackIcon' color="#2965f1" icon={faCss3Alt} />
              <FontAwesomeIcon className='techStackIcon' color="#f0db4f" icon={faSquareJs} />
              <FontAwesomeIcon className='techStackIcon' color="#61DBFB" icon={faReact} />
            </div>
          </SlideInOnScroll>
          <hr className='techHr' />
        </div>
        <ChaningText />
        <div className='aboutMeWrapper' style={{ backgroundImage: `url(${aboutMePicture})` }}>
          <SlideInOnScroll direction={'left'}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos et quia quis est sed nihil quas, ea deleniti enim dolorum ab libero, maxime placeat porro autem, iusto saepe sequi?
            </p>
          </SlideInOnScroll>

          {/* You can add any additional styling here */}
        </div>




      </main>


      <HovereffectProjects />
      <h2 className='contactMeMobile'>Contact me</h2>
      <div className='backgroundColorWrapper'>

        <section className='contactMeWrapper'>

          <article className='contactMeText'>
            <h2 className='contactMeDesktop'>Contact me</h2>
            <h3>If you have any questions, or want to work with me, do not hesitate to contact me.</h3>
           
           <SlideInOnScroll direction={'left'}>
            <div className='iconWrapper'>
              <div className='contactMeBoxes'>
                <a href="#" className='contactLink'>
                  <FontAwesomeIcon className='contactIcons' icon={faPhone} />
                  <p className='contactText'>+45 61 72 03 11</p>
                </a>
              </div>
              <div className='contactMeBoxes'>
                <a href="#" className='contactLink'>
                  <FontAwesomeIcon className='contactIcons' icon={faEnvelope} />
                  <p className='contactText'>Nicolai.harms@gmail.com</p>
                </a>
              </div>
              <div className='contactMeBoxes'>
                <a href="#" className='contactLink'>
                  <FontAwesomeIcon className='contactIcons' icon={faLinkedin} />
                  <p className='contactText'>Nicolai Harms</p>
                </a>
              </div>
            </div>
            </SlideInOnScroll>

          </article>
          <img className='contactMeImage' src={contactpicture} alt="" width="100%" height="100%" />
        </section>

        <Footer />
      </div>
    </div>
  );
}
