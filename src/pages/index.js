import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      
        <p>following the Gatsby Tutorial.</p>
    
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://picsum.photos/id/131/2000/1500"
      />
        
    </Layout>
  );
};

export default IndexPage;