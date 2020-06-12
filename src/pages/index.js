import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import servize from "../images/servize.png"
import battery from "../images/800Battery.png"
import ezenciel from "../images/ezenciel.png"

import arthur from "../images/arthur.png"
import artem from "../images/artem.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1
      style={{
        marginTop: 40,
        marginBottom: 60,
        fontWeight: 400,
        fontSize: 30,
        opacity: 0.8,
      }}
    >
      works
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
          <img src={servize} />
          <p style={{ color: "#aaa", marginTop: 20 }}>Servize</p>
        </Link>
      </div>
      <div className="work" style={{ marginLeft: 90 }}>
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
          <p style={{ color: "#aaa", marginTop: 20 }}>800Battery</p>
        </Link>
      </div>
      <div className="work" style={{ marginLeft: 90 }}>
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
          <img src={ezenciel} />
          <p style={{ color: "#aaa", marginTop: 70 }}>Servize</p>
        </Link>
      </div>
    </div>
    <h1
      style={{
        marginTop: 30,
        marginBottom: 60,
        fontWeight: 400,
        fontSize: 30,
        opacity: 0.8,
      }}
    >
      squad
    </h1>
    <div className="team" style={{ display: "flex" }}>
      <div className="employee">
        <Link
          to={`/`}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textDecoration: "none",
          }}
        >
          <img
            style={{ color: "#aaa", marginTop: 20, width: 130 }}
            src={arthur}
          />
          <p style={{ color: "#ccc", marginTop: 20, marginBottom: 0 }}>
            Arthur A.
          </p>
          <p style={{ color: "#aaa", marginTop: 0, fontSize: 14 }}>
            Alfa Developer, Quality Qeen, Evil genius
          </p>
        </Link>
      </div>
      <div className="employee" style={{ marginLeft: 190 }}>
        <Link
          to={`/`}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textDecoration: "none",
          }}
        >
          <img
            style={{ color: "#aaa", marginTop: 20, width: 130 }}
            src={artem}
          />
          <p style={{ color: "#ccc", marginTop: 20, marginBottom: 0 }}>
            Artem A.
          </p>
          <p style={{ color: "#aaa", marginTop: 0, fontSize: 14 }}>
            Manager, Slave owner, Money maker
          </p>
        </Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
