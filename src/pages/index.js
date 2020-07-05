import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import servize from "../images/e1.png"
import battery from "../images/e2.png"
import ezenciel from "../images/e3.png"
import lumberwell from "../images/e4.png"

import arthur from "../images/arthur.png"
import artem from "../images/artem.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1
      style={{
        marginTop: 40,
        marginBottom: 40,
        fontWeight: 400,
        fontSize: 20,
        opacity: 0.9,
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
          <img src={ezenciel} />
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
          <img src={lumberwell} />
        </Link>
      </div>
    </div>
    <h1
      style={{
        marginTop: 100,
        marginBottom: 40,
        fontWeight: 400,
        fontSize: 20,
        opacity: 0.9,
      }}
    >
      squad
    </h1>
    <div
      className="team"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
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
          <p style={{ color: "#eee", marginTop: 20, marginBottom: 0 }}>
            Arthur A.
          </p>
          <p style={{ color: "#aaa", marginTop: 0, fontSize: 14 }}>
            Alfa Developer, Quality Qeen, Evil genius
          </p>
        </Link>
      </div>
      <div className="employee" style={{}}>
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
          <p style={{ color: "#eee", marginTop: 20, marginBottom: 0 }}>
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
