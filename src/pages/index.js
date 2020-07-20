import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import servize from "../images/e1.png";
import battery from "../images/e2.png";
import ezenciel from "../images/e3.png";
import lumberwell from "../images/e4.png";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1
      style={{
        marginTop: 40,
        marginBottom: 40,
        fontWeight: 900,
        fontSize: 50,
        opacity: 0.9,
        lineHeight: 1.1,
        textTransform: "uppercase",
      }}
    >
      We craft awesome apps
    </h1>
    <h1
      style={{
        marginTop: 50,
        marginBottom: 50,
        fontWeight: 600,
        fontSize: 40,
        opacity: 0.9,
        textTransform: "uppercase",
      }}
    >
      Works
    </h1>
    <div className="works" style={{ display: "flex" }}>
      <div className="work">
        <Link
          to={`https://play.google.com/store/apps/details?id=com.rnbookingapp&hl=ru`}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          <img alt={"artega"} src={servize} />
        </Link>
      </div>
      <div className="work" style={{ marginLeft: 0 }}>
        <Link
          to={`https://apps.apple.com/gb/app/800battery/id1516528654`}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          <img src={battery} />
        </Link>
      </div>
      <div className="work" style={{ marginLeft: 0 }}>
        <Link
          to={`https://apps.apple.com/ru/app/ezenciel/id1479058033`}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          <img alt={"artega"} src={ezenciel} />
        </Link>
      </div>
      <div className="work" style={{ marginLeft: 0 }}>
        <Link
          to={`https://play.google.com/store/apps/details?id=com.holybyte.lumber.well`}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          <img alt={"artega"} src={lumberwell} />
        </Link>
      </div>
    </div>{" "}
    <Link style={{ color: "#eee" }} to={`/works/`}>
      more
    </Link>
    <h1
      style={{
        marginTop: 100,
        marginBottom: 40,
        fontWeight: 600,
        fontSize: 40,
        opacity: 0.9,
        textTransform: "uppercase",
      }}
    >
      How we work
    </h1>
    <ul
      style={{
        color: "#eee",
      }}
    >
      <li>We discuss your business problems or ideas.</li>
      <li>We deep research your business area</li>
      <li>We suggest you the best solution</li>
      <li>We create estimate document and discuss it with you</li>
      <li>
        Here we start to develop an application using {"  "}
        <Link
          style={{
            color: "#aaa",
          }}
          to="https://en.wikipedia.org/wiki/Continuous_delivery"
        >
          Continuous delivery
        </Link>
        <br /> and demonstrate to you the result after 1-2 weeks.
      </li>
      <li>
        Continuously communicate with you <br />
        Get a callback from your customers
        <br />
        Update fetures <br />
        Fix bugs <br />
        Add new features <br />
      </li>
      <li>Support your app</li>
    </ul>
    <div
      className="team"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    ></div>
    <h1
      style={{
        marginTop: 100,
        marginBottom: 40,
        fontWeight: 400,
        fontSize: 20,
        opacity: 0.9,
      }}
    >
      Prices
    </h1>
    <ul
      style={{
        color: "#eee",
      }}
    >
      <li>Mobile application start from: 800$ </li>
      <li>Web application start from: 500$</li>
      <li>UX/UI design start from: 500$</li>
    </ul>
  </Layout>
);

export default SecondPage;
