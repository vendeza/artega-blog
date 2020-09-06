import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";
import Image from '../components/image';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
      }
    `}
    render={(data) => (
      <header
        style={{
          top: 0,
          position: "relative",
          zIndex: 12,
          paddingLeft:40,
          paddingTop:15,
          paddingBottom:15
        }}
      >
        <div
          style={{
            maxWidth: 600,

            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <h4 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `#eee`,
                textDecoration: `none`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >

                <Image name={"logo"}/>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                >

                </div>
              </div>

            </Link>
          </h4>

          <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
            <li>
              <Link
                to="/"
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  color: `#bbb`,
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us/"
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  color: `#bbb`,
                }}
              >
                About us
              </Link>
            </li>

          </ul>
        </div>
      </header>
    )}
  />
);

export default Header;
