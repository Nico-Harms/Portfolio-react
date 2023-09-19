  import React, { useState } from 'react';
  import capoBackground from '../assets/capo.webp';
  import webdocBackground from '../assets/webdoc.webp';
  import vinhandelBackground from '../assets/aarhusvinhandel.webp';
  import { Link } from 'react-router-dom';

  // Import other background images as needed.


  const backgroundImages = {
    capo: capoBackground,
    webdoc: webdocBackground,
    vinhandel: vinhandelBackground,
    // Add other background images for different portfolio items.
  };


  export default function HovereffectProjects() {
    const [isPortfolioActive, setPortfolioActive] = useState(false);
function handlePortfolioHover(e) {
  const portfolioItem = e.currentTarget;
  portfolioItem.classList.toggle('active');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const portfolioWrapper = document.querySelector('.portfolio-wrapper');
  const portfolioPicture = document.querySelector('.portfolio-picture');
  const capotest = document.querySelector('.capo');

  const portfolioList = document.querySelector('.portfolio'); // Define portfolioList here

  const hasActivePortfolio = Array.from(portfolioItems).some((item) =>
    item.classList.contains('active')
  );

  if (hasActivePortfolio) {
    portfolioWrapper.classList.add('selected');
    portfolioList.classList.add('entered');
    portfolioPicture.classList.add('show');
  } else {
    portfolioWrapper.classList.remove('selected');
    portfolioList.classList.remove('entered');
    portfolioPicture.classList.remove('show');
  }
}


    function handleTextHover(e) {
      const hpLink = e.currentTarget.getAttribute('data-mask-link');

      

    }

    function handleTextHoverEnd() {
      const hpLinks = document.querySelectorAll('.hp-footer h6[data-projectname]');
      hpLinks.forEach((link) => link.classList.remove('hovered'));
    }

    return (
 
      <div className="portfolio-wrapper">
      <img className='portfolio-picture capo' src={backgroundImages.capo} alt="" />
      <img className='portfolio-picture webdoc' src={backgroundImages.webdoc} alt="" />
      <img className='portfolio-picture vinhandel' src={backgroundImages.vinhandel} alt="" />


        <ul className="portfolio">
          <div className="project-label">
            <div className="label-mask-wrap">
              <h6 className="portfolio-mask"><span>MY PROJECTS</span></h6>
              <h6 className="masked">MY PROJECTS</h6>
            </div>
          </div>
          <li 
            className={`portfolio-item ${isPortfolioActive ? 'active' : ''}`}
            onMouseEnter={handlePortfolioHover}
            onMouseLeave={handlePortfolioHover}>
            <div className="portfolio-mask-wrap">
              <Link to="/Capo"> 
              <a href="#">
                <div className="portfolio-mask"><span>capo</span></div>
          
                <span
                  className="fake-link"
                  data-mask-link="capo"
                  onMouseEnter={handleTextHover}
                  onMouseLeave={handleTextHoverEnd}
                ></span>
              </a>
              </Link>
            </div>
          </li>
          <li
            className={`portfolio-item ${isPortfolioActive ? 'active' : ''}`}
            data-portfolio-service="digital & ecommerce"
            onMouseEnter={handlePortfolioHover}
            onMouseLeave={handlePortfolioHover}>
            <div className="portfolio-mask-wrap">
            <Link to="/Webdoc"> 

              <a href="#">
                <div className="portfolio-mask"><span>webdoc</span></div>
                <span
                  className="fake-link"
                  data-mask-link="webdoc"
                  onMouseEnter={handleTextHover}
                  onMouseLeave={handleTextHoverEnd}
                ></span>
              </a>
              </Link>
            </div>
          </li>
          <li
            className="portfolio-item"
            data-portfolio-service="digital & brand"
            onMouseEnter={handlePortfolioHover}
            onMouseLeave={handlePortfolioHover}
          >
            <div className="portfolio-mask-wrap">
            <Link to="/Vinhandel"> 
              <a href="#">
                <div className="portfolio-mask"><span>vinhandel</span></div>
                <span
                  className="fake-link"
                  data-mask-link="vinhandel"
                  onMouseEnter={handleTextHover}
                  onMouseLeave={handleTextHoverEnd}
                ></span>
              </a>
              </Link>
            </div>
          </li>
        </ul>
        /
    

      </div>
     
    );
  }
