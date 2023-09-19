import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Capo from "./pages/Capo";
import Webdoc from "./pages/Webdoc";
import Vinhandel from "./pages/Vinhandel";
import { useEffect, useState } from "react";

export default function App() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    async function getData() {
    const response = await fetch("https://wordpress.harmscreativity.dk/wp-json/wp/v2/posts?_embed&categories=1");
    const data = await response.json();
    setposts(data);
  }
  getData();
  }, []);

  
  return (
   
     <main>
     
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/capo" element={<Capo />} />
        <Route path="/webdoc" element={<Webdoc />} />
        <Route path="/vinhandel" element={<Vinhandel />} />

      </Routes>
     
      </main>
    
      
  );
}