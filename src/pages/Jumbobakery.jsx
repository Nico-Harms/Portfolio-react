import photoshop from "../assets/photoshop.svg";
import html from "../assets/html.svg";
import Slide from 'react-reveal/Slide'
import css from "../assets/css.svg";
import github from "../assets/github.svg";
import BlobSvg from '../components/BlobSvg.jsx';
import '../components/ProjectDescription.css';
import jumbo from '../assets/jumbo-portfolio.webp';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Projectstext from "../components/ProjectsText";
import Bounce from 'react-reveal/Bounce';
import Pulse from 'react-reveal/Pulse';



export default function Lendr() {
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
                    <h2 className="MobileHeader">Jumbo Bakery</h2>
                    <BlobSvg profilePicture={jumbo} />
                    <div className="buttonWrapper">
                        <Slide left>
                            <a className="projectBtn" target="_blank" href="#">LIVE DEMO</a>
                        </Slide>
                        <Slide right>
                            <a className="projectBtn" target="_blank" href="#">CODE</a>
                        </Slide>
                    </div>
                </div>
                <div className="projectDescription">
                    <h2>Jumbo Bakery </h2>
                    <p>Beskrivelse kommer snart
                    </p>
                    {posts.map(post => (
                        <Projectstext key={post.id} post={post} />
                    ))}

                    <hr />
                    <Bounce bottom cascade>
                        <div className="ikonProgrammer">
                            <img src={photoshop} alt="" />
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={github} alt="" />
                        </div>
                    </Bounce>
                </div>


            </section>
            <Link to="/Capo">
                <Pulse>
                    <a className="nextProject" href="">Næste projekt</a>
                </Pulse>
            </Link>
            <Footer />
        </div>
    )



}