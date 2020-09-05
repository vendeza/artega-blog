import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import arthur from "../images/arthur.png";
import artem from "../images/artem.png";

const AboutUsPage = () => (
  <Layout>
    <SEO title="Page two" />

    <h1
      style={{
        marginTop: 100,
        marginBottom: 40,
        fontSize: 40,
        opacity: 0.9,
        fontWeight: 600,
        color: "#eee",
      }}
    >
      ABOUT US
    </h1>
    <p
      style={{
        color: "#ddd",
      }}
    >
      Hello, we are Artega.
      <br /> <br />
      We are mobile and web app developers.
      <br /> <br />
      <div
        className="team"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div className="employee">

            <img
              alt={"artega"}
              style={{ color: "#aaa", marginTop: 20, width: 130 }}
              src={arthur}
            />
            <p style={{ color: "#eee", marginTop: 20, marginBottom: 0 }}>
              Arthur A.
            </p>
            <p style={{ color: "#aaa", marginTop: 0, fontSize: 14 }}>
              Alfa Developer, Quality Qeen, Evil genius
            </p>
        </div>
        <div className="employee" style={{}}>

            <img
              alt={"artega"}
              style={{ color: "#aaa", marginTop: 20, width: 130 }}
              src={artem}
            />
            <p style={{ color: "#eee", marginTop: 20, marginBottom: 0 }}>
              Artem A.
            </p>
            <p style={{ color: "#aaa", marginTop: 0, fontSize: 14 }}>
              Manager, UX/UI designer, developer
            </p>
        </div>
      </div>
      <br /> <br />
      Our primary focus is helping small and medium-sized enterprises to resolve
      different problems using applications development for IOS and Android
      platforms and web browsers.
      <br /> <br />
      Our career covers about 10 years of experience in IT in medical, pharmacy,
      game industries, and bank.
      <br /> <br />

      We provide the next things:
      <br />
      <br />
      <ul>
        <li>
          Development app from idea, prototype, MVP to release and publishing
          your app to stores.
        </li>

        <li>
          We’ll help you to increase the performance of your product, bug fixes,
          speed optimizations, and add new features for more profit{" "}
        </li>
        <li>
          If you need UX/UI design. No problem We understand that UX and UI
          design is working for your customers.
        </li>
      </ul>
      <br />
      Our code is hight quality, stable, and testable, because we use the best
      practices.
      <br /> <br />
      It means that your app will work right and your business will give you
      profit.
      <br /> <br />

      <br /> <br />
      So,
        <br /> <br />
        <br /> <br />
        let's work!

    </p>
  </Layout>
);

export default AboutUsPage;
