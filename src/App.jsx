import Navigation from "./components/Navigation";
import { Route, Routes, useLocation } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Capo from "./pages/Capo";
import Webdoc from "./pages/Webdoc";
import Vinhandel from "./pages/Vinhandel";
import { useEffect, useState } from "react";
import Jumbobakery from "./pages/Jumbobakery";
import Lendr from "./pages/Lendr";

export default function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the pathname changes
  }, [pathname]);
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
        <Route path="/jumbo" element={<Jumbobakery />} />
        <Route path="lendr" element={<Lendr />} />


      </Routes>

    </main>


  );
}