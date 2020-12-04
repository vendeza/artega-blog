import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import arthur from "../images/arthur.png";
import artem from "../images/artem.png";

const AboutUsPage = () => (
  <Layout>
    <SEO title="Page two" />

    <h1 style={{ maxWidth: 800 }}>Crafting awesome mobile apps</h1>

    <div className="info-block">
      <h2
        style={{
          marginTop: 60,
          marginBottom: 40,
          fontWeight: 600,
          fontSize: 40,
          opacity: 0.9
        }}
      >
        How we work
      </h2>
      <ul>
        <li>Discuss your business problems</li>
        <li>Provide a rough estimate document</li>
        <li>Deep research your business area</li>
        <li>Develop architecture</li>
        <li>Provide an exact estimate</li>
        <li>Get User Stories</li>
        <li>Develop UX/UI design</li>
        <li>Develop the app</li>
        <li>Provide QA</li>
        <li>Support your app</li>
      </ul>
    </div>

    <div className="info-block">
      <p>
        <h2
          style={{
            marginTop: 60,
            marginBottom: 40,
            fontWeight: 600,
            fontSize: 40,
            opacity: 0.9
          }}
        >
          {" "}
          We provide the next services{" "}
        </h2>
      </p>
      <ul>
        <li>Design UI/UX an mobile app</li>
        <li>Creating a business mobile app</li>
        <li>Integration with admin panel</li>
      </ul>

      <h3> Additional options</h3>
      <ul>
        {" "}
        <li>
          <li>Architecture development </li>
          <li> Payment systems integration </li>
          <li> Messaging & Chat </li>
          <li> Social networks integration </li>
          <li> SMS & Email systems integration </li>
          <li> Increase performance </li>
          <li> UI/UX improving </li>
        </li>
      </ul>
      <p>
        <br />
        Our primary focus is helping small and medium-sized enterprises to
        resolve different problems using applications development for IOS and
        Android platforms.
        <br /> <br />
      </p>
    </div>
  </Layout>
);

export default AboutUsPage;
