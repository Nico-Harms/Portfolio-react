import React from 'react';
import HovereffectProjects from '../components/HovereffectsProjects.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faReact, faCss3, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import BlobSvg from '../components/BlobSvg.jsx';


export default function Home() {
  return (
    <div className='siteWrapper'>
      <main className='mainWrapper'>
        <div className='textToPictureWrapper'>
          <div className='textWrapperMain'>
            <h2>Hej, jeg er Nicolai!</h2>
            <h3>Front-End Developer med passion for inaktive løsniger og design  </h3>
            <div className='soMe'>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>

            </div>
          </div>
          <BlobSvg />
        </div>
        <div className='techStack'>
          <h5 className='techHeader'>Tech Stack</h5>
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faSquareJs} />
          <FontAwesomeIcon icon={faReact} />
        </div>

      </main>
      <HovereffectProjects />
      {/* More content */}
    </div>
  );
}
