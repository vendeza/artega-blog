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
        style={{maxWidth:800}}
    >
        Crafting awesome mobile apps
    </h1>

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
            <ul

            >
                <li>Discuss your business problems</li>
                <li>Deep research your business area</li>
                <li>Suggest you the best solution</li>
                <li>Create estimate document</li>
                <li>Develop the app</li>
                <li>Support your app</li>
            </ul>
        </div>


        <div className="info-block">
            <p>
              <br />
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
            </p>
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
        <p>
              <br />
              Our code is hight quality, stable, and testable, because we use the best
              practices.
              <br /> <br />
              It means that your app will work right and your business will give you
              profit.
              <br /> <br />

            </p>
        </div>

      <div
          className="team"

      >
          <div className="employee" style={{flex:1}}>
              <img
                  alt={"artega"}
                  style={{ marginTop: 20, width: 130 }}
                  src={arthur}
              />
              <p style={{ marginTop: 20, marginBottom: 0 }}>
                  Arthur A.
              </p>
              <p style={{  marginTop: 0, fontSize: 14 }}>
                  Senior Application Engineer
              </p>
          </div>
          <div className="employee"  style={{flex:1,marginLeft:20}}>

              <img
                  alt={"artega"}
                  style={{  marginTop: 20, width: 130 }}
                  src={artem}
              />
              <p style={{ marginTop: 20, marginBottom: 0 }}>
                  Artem A.
              </p>
              <p style={{  marginTop: 0, fontSize: 14 }}>
                  Application Engineer, Designer
              </p>
          </div>
      </div>
  </Layout>
);

export default AboutUsPage;
