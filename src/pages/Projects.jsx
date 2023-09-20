import React, { useState, useEffect } from "react";
import Projectstext from "../components/ProjectsText";

export default function Projects() {


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
        <>
          {posts.map(post => (
                  <Projectstext key={post.id} post={post} />
                ))}
    
        </>
  
    )
}