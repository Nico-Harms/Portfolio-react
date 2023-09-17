import React, { useState } from 'react';

export default function HovereffectProjects() {
  const [isPortfolioActive, setPortfolioActive] = useState(false);

  function handlePortfolioHover(e) {
    const portfolioItem = e.currentTarget;
    const panel = portfolioItem.querySelector('.portfolio-mask');

    portfolioItem.classList.toggle('active');
    panel.classList.toggle('show');

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioWrapper = document.querySelector('.portfolio-wrapper');
    const portfolioList = document.querySelector('.portfolio');
    const projectPicture = document.querySelector('.projectPicture');
    const hasActivePortfolio = Array.from(portfolioItems).some((item) =>
      item.classList.contains('active')
    );

    if (hasActivePortfolio) {
      portfolioWrapper.classList.add('selected');
      portfolioList.classList.add('entered');
      projectPicture.classList.add('entered');
    } else {
      portfolioWrapper.classList.remove('selected');
      portfolioList.classList.remove('entered');
      projectPicture.classList.remove('entered');
      
    }
  }

  function handleTextHover(e) {
    const hpLink = e.currentTarget.getAttribute('data-mask-link');
    const hpLinks = document.querySelectorAll('.hp-footer h6[data-projectname]');
    
    hpLinks.forEach((link) => {
      if (link.getAttribute('data-projectname') === hpLink) {
        link.classList.add('hovered');
      } else {
        link.classList.remove('hovered');
      }
    });
  }

  function handleTextHoverEnd() {
    const hpLinks = document.querySelectorAll('.hp-footer h6[data-projectname]');
    hpLinks.forEach((link) => link.classList.remove('hovered'));
  }

  return (
    <div className="portfolio-wrapper">
 

      <ul className="portfolio">
        <div className="project-label">
          <div className="label-mask-wrap">
            <h6 className="portfolio-mask"><span>MY PROJECTS</span></h6>
            <h6 className="masked">MY PROJECTS</h6>
          </div>
        </div>
        <li
          className={`portfolio-item ${isPortfolioActive ? 'active' : ''}`}
          data-portfolio-service="digital & ecommerce"
          onMouseEnter={handlePortfolioHover}
          onMouseLeave={handlePortfolioHover}
        >
          <div className="portfolio-mask-wrap">
            <a href="#">
              <div className="portfolio-mask"><span>capo</span></div>
              <span
                className="fake-link"
                data-mask-link="capo"
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextHoverEnd}
              ></span>
            </a>
            <img  className={`projectPicture ${isPortfolioActive ? 'active' : ''}`} src="src\assets\capo.webp" alt="" />

          </div>
        </li>
        <li
          className={`portfolio-item ${isPortfolioActive ? 'active' : ''}`}
          data-portfolio-service="digital & ecommerce"
          onMouseEnter={handlePortfolioHover}
          onMouseLeave={handlePortfolioHover}
        >
          <div className="portfolio-mask-wrap">
            <a href="#">
              <div className="portfolio-mask"><span>webdoc</span></div>
              <span
                className="fake-link"
                data-mask-link="webdoc"
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextHoverEnd}
              ></span>
            </a>
            <img  className={`projectPicture ${isPortfolioActive ? 'active' : ''}`} src="src\assets\webdoc.PNG" alt="" />

          </div>
        </li>
        <li
          className="portfolio-item"
          data-portfolio-service="digital & brand"
          onMouseEnter={handlePortfolioHover}
          onMouseLeave={handlePortfolioHover}
        >
          <div className="portfolio-mask-wrap">
            <a href="#">
              <div className="portfolio-mask"><span>vinhandel</span></div>
              <span
                className="fake-link"
                data-mask-link="vinhandel"
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextHoverEnd}
              ></span>
            </a>
          </div>
        </li>
      </ul>
      /
  

    </div>
  );
}
