
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
import Projectstext from "../components/ProjectsText";
import { useEffect, useState } from "react";
import Slide from 'react-reveal/Slide'
import Bounce from 'react-reveal/Bounce';
import Pulse from 'react-reveal/Pulse';



export default function Webdoc() {


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
                <h2 className="MobileHeader">Webdoc I undervisningen</h2>
            <BlobSvg profilePicture={webdoc} />
                <div className="buttonWrapper">
                    <Slide left>
                    <a className="projectBtn" target="_blank" href="https://webdoc-ai.harmscreativity.dk/">LIVE DEMO</a>
                    </Slide>
                    <Slide right>
                    <a className="projectBtn" target="_blank" href="https://github.com/Nico-Harms/Webdoc">CODE</a>
                    </Slide>
                </div>
            </div>
            <div className="projectDescription">
                <h2>Webdoc - AI i undervisningen</h2>
                <p>Disclaimer - Dette projekt er ikke lavet med hensigt på at være responsivt, da det ikke var inden for vores fokusområde.
                </p>
                 <p>
                 I denne omgang fik vi til opgave at lave en Webdoc om et selvvalgt emne. Min gruppe og jeg valgte at undersøge AI i undervisningen, fordi hvem synes ikke AI er en smule spændende og skræmmende på samme tid? Vi fokuserede på at skabe en spændende fortælling ved hjælp af grafiske og dynamiske elementer, så vi kunne formidle flere oplysninger med minimal brug af store tekster. 
                 Alle informtioner og interviews er indsamlet af os selv, og vi har selv stået for at lave alt indholdet. 
                   </p>
                    
                
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
        <Link to="/Vinhandel"> 
        <Pulse> 
                <a className="nextProject" href="">Næste projekt</a>
                </Pulse>
            </Link>
           <Footer />
        </div>
    )
}