
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import github from "../assets/github.svg";
import BlobSvg from '../components/BlobSvg.jsx';
import vinhandel from '../assets/aarhusvinhandel.webp';
import figma from '../assets/figma.svg';
import javscript from '../assets/javascript.svg';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import the css 
import '../components/ProjectDescription.css';



export default function Vinhandel() {
    return (
    <div className="SiteWrapper">
        <section className="linkWrapper">
            <div className="pictureButtonWrapper">
                <h2 className="MobileHeader">Aarhus Vinhandel</h2>
            <BlobSvg profilePicture={vinhandel} />
                <div className="buttonWrapper">
                    <a className="projectBtn" target="_blank" href="https://aarhusvinhandel.harmscreativity.dk/">LIVE DEMO</a>
                    <a className="projectBtn" target="_blank" href="https://github.com/Nico-Harms/2-semester-eksamen">CODE</a>
                </div>
            </div>
            <div className="projectDescription">
                <h2>Aarhus Vinhandel</h2>
                <p>I dette projekt blev der arbejdet sammen med Aarhus Vinhandel i forbindelse med Afsluttende Eksamens projekt. Mit særlige fokus punkt ved dette projekt vedrøte funktionaliten af 
                    en dynamisk opbygning, så hvert produkt havde en flydende overførsel, fremfor en hardcoded løsning da jeg så det som god udfordring og en høj prioritet.
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
        <Link to="/Capo"> 
                <a className="nextProject" href="">Næste projekt</a>
            </Link>
           <Footer />
        </div>
    )
}