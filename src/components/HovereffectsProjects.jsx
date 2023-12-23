import React, { useState } from 'react';
import capoBackground from '../assets/capo.webp';
import webdocBackground from '../assets/webdoc.webp';
import vinhandelBackground from '../assets/vinhandel.webp';
import { Link } from 'react-router-dom';
import jumboBackground from '../assets/jumbo-portfolio.webp';
import lendrBackground from '../assets/lendr-portfolio.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';





const backgroundImages = {
  capo: capoBackground,
  webdoc: webdocBackground,
  vinhandel: vinhandelBackground,
  jumbo: jumboBackground,
  lendr: lendrBackground

};


export default function HovereffectProjects() {
  const [isPortfolioActive, setPortfolioActive] = useState(false);
  function handlePortfolioHover(e) {
    const portfolioItem = e.currentTarget;
    portfolioItem.classList.toggle('active');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioWrapper = document.querySelector('.portfolio-wrapper');
    const portfolioList = document.querySelector('.portfolio'); // Define portfolioList here
    const portfolioPicture = document.getElementById(portfolioItem.id.split("-")[0] + "-image");
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

    <div id='projects' className="portfolio-wrapper">
      <img id='capo-image' className='portfolio-picture capo' src={backgroundImages.capo} alt="" />
      <img id='webdoc-image' className='portfolio-picture webdoc' src={backgroundImages.webdoc} alt="" />
      <img id='vinhandel-image' className='portfolio-picture vinhandel' src={backgroundImages.vinhandel} alt="" />
      <img id='jumbo-image' className='portfolio-picture jumbo' src={backgroundImages.jumbo} alt="" />
      <img id='lendr-image' className='portfolio-picture lendr' src={backgroundImages.lendr} alt="" />


      <ul className="portfolio">
        <div className="project-label">
          <div className="label-mask-wrap">
            <h6 className="portfolio-mask"><span>MINE PROJEKTER</span></h6>
            <h6 className="masked">MINE PROJEKTER</h6>
          </div>
        </div>
        <li id='capo-hover'
          className={`portfolio-item ${isPortfolioActive ? 'active' : ''}`}
          onMouseEnter={handlePortfolioHover}
          onMouseLeave={handlePortfolioHover}>
          <img className='capo' src={backgroundImages.capo} alt="" />
          <div className="portfolio-mask-wrap">
            <Link to="/Capo">
              <a href="#">

                <div className='arrow-wrapper'>
                  <div className="portfolio-mask"><span>capo</span>


                  </div>
                </div>

                <span
                  className="fake-link"
                  data-mask-link="capo"
                  onMouseEnter={handleTextHover}
                  onMouseLeave={handleTextHoverEnd}>

                </span>

              </a>
            </Link>
          </div>
        </li>
        <li id='webdoc-hover'
          className={`portfolio-item ${isPortfolioActive ? 'active' : ''}`}
          data-portfolio-service="digital & ecommerce"
          onMouseEnter={handlePortfolioHover}
          onMouseLeave={handlePortfolioHover}>
          <img className='webdoc' src={backgroundImages.webdoc} alt="" />

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
        <li id='vinhandel-hover'
          className="portfolio-item"
          data-portfolio-service="digital & brand"
          onMouseEnter={handlePortfolioHover}
          onMouseLeave={handlePortfolioHover} >
          <img className='vinhandel' src={backgroundImages.vinhandel} alt="" />

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

        <li id='lendr-hover'
          className={`portfolio-item ${isPortfolioActive ? 'active' : ''}`}
          onMouseEnter={handlePortfolioHover}
          onMouseLeave={handlePortfolioHover}>
          <img className='lendr' src={backgroundImages.lendr} alt="" />
          <div className="portfolio-mask-wrap">
            <Link to="/Lendr">
              <a href="#">
                <div className="portfolio-mask"><span>lendr</span></div>
                <span
                  className="fake-link"
                  data-mask-link="lendr"
                  onMouseEnter={handleTextHover}
                  onMouseLeave={handleTextHoverEnd}
                ></span>
              </a>
            </Link>
          </div>
        </li>

        <li id='jumbo-hover'
          className={`portfolio-item ${isPortfolioActive ? 'active' : ''}`}
          onMouseEnter={handlePortfolioHover}
          onMouseLeave={handlePortfolioHover}>
          <img className='jumbo' src={backgroundImages.jumbo} alt="" />
          <div className="portfolio-mask-wrap">
            <Link to="/jumbo">
              <a href="#">
                <div className="portfolio-mask"><span>jumbo</span></div>
                <span
                  className="fake-link"
                  data-mask-link="jumbo"
                  onMouseEnter={handleTextHover}
                  onMouseLeave={handleTextHoverEnd}
                ></span>
              </a>
            </Link>
          </div>
        </li>

      </ul>



    </div>

  );
}
