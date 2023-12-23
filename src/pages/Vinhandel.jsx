
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import github from "../assets/github.svg";
import BlobSvg from '../components/BlobSvg.jsx';
import vinhandel from '../assets/aarhusvinhandel.webp';
import figma from '../assets/figma.svg';
import javscript from '../assets/javascript.svg';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Projectstext from "../components/ProjectsText";
// import the css 
import '../components/ProjectDescription.css';
import { Slide } from "react-reveal";
import Bounce from 'react-reveal/Bounce';
import Pulse from 'react-reveal/Pulse';



export default function Vinhandel() {

    const [posts, setposts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.harmscreativity.dk/wp-json/wp/v2/posts?_embed&categories=3");
            const data = await response.json();
            setposts(data);
        }
        getData();
    }, []);




    return (
        <div className="SiteWrapper">
            <section className="linkWrapper">
                <div className="pictureButtonWrapper">
                    <h2 className="MobileHeader">Aarhus Vinhandel</h2>
                    <BlobSvg profilePicture={vinhandel} />
                    <div className="buttonWrapper">
                        <Slide left>
                            <a className="projectBtn" target="_blank" href="https://aarhusvinhandel.harmscreativity.dk/">LIVE DEMO</a>
                        </Slide>
                        <Slide right>
                            <a className="projectBtn" target="_blank" href="https://github.com/Nico-Harms/2-semester-eksamen">CODE</a>
                        </Slide>
                    </div>
                </div>
                <div className="projectDescription">
                    <h2>Aarhus Vinhandel</h2>
                    <p>I dette projekt samarbejdede vi med Aarhus Vinhandel i forbindelse med vores Afsluttende Eksamensprojekt. Mit særlige fokus i dette projekt vedrørte funktionaliteten af en dynamisk opbygning, hvor hvert produkt havde en flydende overførsel, i stedet for en hardcoded løsning. Jeg så det som en god udfordring og prioriterede det højt, da det ville være en oplagt opbygning for en virksomhed som opdatere produkter løbende. Andre bemærkelsesværdige funktioner inkluderer brugen af JSON-data, filtreringssøgning samt muligheden for at tilføje og fjerne produkter fra sin kurv. Hjemmesiden er designet til at være responsiv og overholde moderne best practices inden for programmering                </p>
                    {posts.map(post => (
                        <Projectstext key={post.id} post={post} />
                    ))}
                    <hr />
                    <Bounce bottom cascade>

                        <div className="ikonProgrammer">
                            <img src={figma} alt="Figma" />
                            <img src={html} alt="HTML5" />
                            <img src={css} alt="CSS3" />
                            <img src={javscript} alt="JAVASCRIPT" />
                            <img src={github} alt="GITHUB-DESKTOP" />
                        </div>
                    </Bounce>

                </div>

            </section>
            <Link to="/Lendr">
                <Pulse>
                    <a className="nextProject" href="">Næste projekt</a>
                </Pulse>
            </Link>
            <Footer />
        </div>
    )
}