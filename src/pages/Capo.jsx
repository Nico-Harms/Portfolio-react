import photoshop from "../assets/photoshop.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import github from "../assets/github.svg";
import BlobSvg from '../components/BlobSvg.jsx';
import capo from '../assets/capo.webp';
import '../components/ProjectDescription.css';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";



export default function Capo() {
    return (
        <div className="SiteWrapper">
        <section className="linkWrapper">
           <div className="pictureButtonWrapper">
            <BlobSvg profilePicture={capo} />
                <div className="buttonWrapper">
                    <a className="projectBtn" href="">LIVE DEMO</a>
                    <a className="projectBtn" href="">CODE</a>
                </div>
            </div>
            <div className="projectDescription">
                <h2>CAPO Vin & Mad bar</h2>
                <p>Capo var det første projekt, hvor vi fik til opgave og lave en hjemmeside, som var responsiv.
                    Udarbejdelsen af dette projekt, har været i dialog med ejerne af Capo samt de besøgende af restauranten.
                </p>
                <h5>Programmer jeg brugte i dette projekt</h5>
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