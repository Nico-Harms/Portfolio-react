import React from 'react';
import HovereffectProjects from '../components/HovereffectsProjects.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faReact, faCss3Alt, faGithub, faLinkedin, faWordpress} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import aboutMePicture from '../assets/aboutmepicture.png';
import contactpicture from '../assets/contactmepicture.webp';
import profilePicture from '../assets/profilepicture.png';
import BlobSvg from '../components/BlobSvg.jsx';
import Footer from '../components/Footer.jsx';
 import ChangingText from '../components/ChangingText.jsx';



export default function Home() {
  return (
    <div className='siteWrapper'>

      <main className="mainWrapper">
        <div className='textToPictureWrapper'>
          <div className='textWrapperMain'>

              <div className='headerContainer'>
                <h2 className='mainHeaderDesktop'>Hej, jeg er Nicolai!</h2>

                <h3>Front-End Developer med passion for internaktive løsninger og design</h3>
                <div className='soMe'>
                  <a className='github' target='_blank' href="https://github.com/Nico-Harms"><FontAwesomeIcon icon={faGithub} alt="Github" /></a>
                  <a className='linkedin' target='_blank' href="https://www.linkedin.com/in/nicolai-harms-0847551b8/?originalSubdomain=dk"><FontAwesomeIcon icon={faLinkedin} alt="Linkedin" /></a>
                </div>
              </div>
          </div>
            <div className='svgHeaderWrapper'>
              <h2 className='mainHeaderMobile'>Hej, jeg er Nicolai!</h2>
              <BlobSvg profilePicture={profilePicture} />
            </div>
        </div>


        <div className='techStack'>
          <h5 className='techHeader'>Tech Stack</h5>
          <hr className='techHr' />
            <div className='techIconWrapper'>
              <FontAwesomeIcon className='techStackIcon' color='#f06529' icon={faHtml5} />
              <FontAwesomeIcon className='techStackIcon' color="#2965f1" icon={faCss3Alt} />
              <FontAwesomeIcon className='techStackIcon' color="#f0db4f" icon={faSquareJs} />
              <FontAwesomeIcon className='techStackIcon' color="#61DBFB" icon={faReact} />
              <FontAwesomeIcon className='techStackIcon' color="#21759b" icon={faWordpress} />
            </div>
          <hr className='techHr' />
        </div>
        <ChangingText />
        <div id='aboutMe' className='aboutMeWrapper' style={{ backgroundImage: `url(${aboutMePicture})` }}>
          <h3>Lidt om mig</h3>
            <p>
            Jeg er 25 år gammel og bosat i Aarhus. Fra en tidlig alder har jeg altid haft en stærk passion for IT. 
            Min fascination for teknologi og kreativ tænkning har drevet mig til at forfølge en karriere som frontend-udvikler. 
            Jeg elsker at dykke ned i komplekse problemer og finde innovative løsninger, samtidig med at jeg bruger min kreativitet til at forme digitale idéer til virkelighed.
            </p>

          {/* You can add any additional styling here */}
        </div>




      </main>


      <HovereffectProjects />
      <h2 className='contactMeMobile'>Contact me</h2>
      <div className='backgroundColorWrapper'>

        <section id='contactMe' className='contactMeWrapper'>

          <article className='contactMeText'>
            <h2 className='contactMeDesktop'>Kontakt mig</h2>
            <p className='contactMeBreadText'>
              I skal hyre mig fordi jeg arbejder godt sammen i teams, jeg er målrettet ambitøs også er jeg lige den i mangler.
              Hvis i ellers har nogle spørgsmål, eller ønsker at arbejde sammen med mig, så tøv ikke med at kontakte mig.
            </p>
           
            <div className='iconWrapper'>
              <div className='contactMeBoxes'>
                <a href="#" className='contactLink'>
                  <FontAwesomeIcon className='contactIcons' icon={faPhone} />
                  <p className='contactText'>+45 61 72 03 11</p>
                </a>
              </div>
              <div className='contactMeBoxes'>
              <a href="mailto: nicolai.harms@gmail.com" className='contactLink'>
                  <FontAwesomeIcon className='contactIcons' icon={faEnvelope} />
                  <p className='contactText'>Nicolai.harms@gmail.com</p>
                  
                </a>
              </div>
              <div className='contactMeBoxes'>
                <a target='_blank' href="https://www.linkedin.com/in/nicolai-harms-0847551b8/?originalSubdomain=dk" className='contactLink'>
                  <FontAwesomeIcon className='contactIcons' icon={faLinkedin} />
                  <p className='contactText'>Nicolai Harms</p>
                </a>
              </div>
            </div>

          </article>
          <div className='contactMeImageWrapper'>
          <img className='contactMeImage' src={contactpicture} alt="" width="100%" height="100%" />

          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
