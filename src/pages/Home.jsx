import React from 'react';
import HovereffectProjects from '../components/HovereffectsProjects.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faReact, faCss3Alt, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import BlobSvg from '../components/BlobSvg.jsx';


export default function Home() {
  return (
    <div className='siteWrapper'>
      <main className='mainWrapper'>
      <div className='textToPictureWrapper'>
  <div className='textWrapperMain'>
  <div className='headerContainer'>
    <h2>Hej, jeg er Nicolai!</h2>
   
      <h3>Front-End Developer med passion for inaktive løsninger og design</h3>
      <div className='soMe'>
        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  </div>
  <BlobSvg />
</div>

        <div className='techStack'>
          <h5 className='techHeader'>Tech Stack</h5>
          <hr className='techHr' />
          <FontAwesomeIcon className='techStackIcon' color='#f06529' icon={faHtml5} />
          <FontAwesomeIcon className='techStackIcon' color="#2965f1" icon={faCss3Alt} />
          <FontAwesomeIcon className='techStackIcon' color="#f0db4f" icon={faSquareJs} />
          <FontAwesomeIcon className='techStackIcon' color="#61DBFB" icon={faReact} />
        </div>

      </main>
      <HovereffectProjects />
      {/* More content */}
    </div>
  );
}
