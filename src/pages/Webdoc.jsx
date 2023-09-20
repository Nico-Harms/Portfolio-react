
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import github from "../assets/github.svg";
import BlobSvg from '../components/BlobSvg.jsx';
import webdoc from '../assets/webdoc.webp';
import figma from '../assets/figma.svg';
import javscript from '../assets/javascript.svg';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import the css 
import '../components/ProjectDescription.css';



export default function Webdoc() {
    return (
    <div className="SiteWrapper">
        <section className="linkWrapper">
            <div className="pictureButtonWrapper">
                <h2 className="MobileHeader">Webdoc I undervisningen</h2>
            <BlobSvg profilePicture={webdoc} />
                <div className="buttonWrapper">
                    <a className="projectBtn" target="_blank" href="https://webdoc-ai.harmscreativity.dk/">LIVE DEMO</a>
                    <a className="projectBtn" target="_blank" href="https://github.com/Nico-Harms/Webdoc">CODE</a>
                </div>
            </div>
            <div className="projectDescription">
                <h2>Webdoc - AI i undervisningen</h2>
                <p>I denne omgang fik vi til opgave at lave en Webdoc om et selvvalgt emne. Min gruppe og jeg valgte og undersøge AI i undervisningen.
                </p>
                <h5>Programmer jeg brugte i dette projekt</h5>
                <hr />
                <div className="ikonProgrammer">
                    <img src={figma} alt="Figma" />
                    <img src={html} alt="HTML5" />
                    <img src={css} alt="CSS3" />
                    <img src={javscript} alt="JAVASCRIPT" />	
                    <img src={github} alt="GITHUB-DESKTOP" />
                </div>
            </div>
      
            </section>
        <Link to="/Vinhandel"> 
                <a className="nextProject" href="">Næste projekt</a>
            </Link>
           <Footer />
        </div>
    )
}