import photoshop from "../assets/photoshop.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import github from "../assets/github.svg";
import BlobSvg from '../components/BlobSvg.jsx';
import capo from '../assets/capo.webp';
import '../components/ProjectDescription.css';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Projectstext from "../components/ProjectsText";



export default function Capo() {
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
            <h2 className="MobileHeader">CAPO Vin & Mad bar</h2>
            <BlobSvg profilePicture={capo} />
                <div className="buttonWrapper">
                    <a className="projectBtn" target="_blank" href="https://harmscreativity.dk/#vin-rum">LIVE DEMO</a>
                    <a className="projectBtn" target="_blank" href="https://github.com/madsnbkristensen/Mobile-first-capo?fbclid=IwAR1w0bOCbxqwvpK_a5DGXL_SNVFYBWYbx1vgDs7RfG2vzREBAFUYE5zqWWM">CODE</a>
                </div>
            </div>
            <div className="projectDescription">
                <h2>CAPO Vin & Mad bar</h2>
                <p>Capo var det første projekt, hvor vi fik til opgave at lave en hjemmeside, der var responsiv. Udarbejdelsen 
                    af dette projekt har været i dialog med ejerne af Capo samt de besøgende på restauranten. Nøgleordene fra ejerne var, at 
                    hjemmesiden skulle være simpel, overskuelig og informativ. De ønskede at bevare deres image som et mysterium, så gæsterne ville komme ned 
                    og blive overrasket over det nye vinkort og menukort. Derfor har vi valgt at begrænse informationerne, så gæsterne bliver nysgerrige og 
                    beslutter at besøge restauranten
                </p>
                {posts.map(post => (
                  <Projectstext key={post.id} post={post} />
                ))}
    
                <hr />
                <div className="ikonProgrammer">
                    <img src={photoshop} alt="" />
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={github} alt="" />
                </div>
            </div>
         
        
        </section>
        <Link to="/Webdoc"> 
                <a className="nextProject" href="">Næste projekt</a>
            </Link>
           <Footer />
        </div>
    )


    
}