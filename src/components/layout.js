/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import { relative } from "path";
import background from "../images/bg1.webp";
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div style={{ position: "relative",  backgroundColor:"#000" }}>
        <Header siteTitle={data.site.siteMetadata.title} />

        <div style={{
            position: "absolute",
            width: "100%",
            zIndex: 0,
            top:0,
          }}>

          <div style={{
              position: "fixed",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }} >
              <div style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#000",
                      opacity: 0.6,
                      zIndex: 2,
                  }}>

              </div>
            <img
              alt={"artega"}
              style={{ alignSelf: "center", width: 1200 }}
              src={background}
            />
          </div>

        </div>


        <div
          style={{
            margin: `0 auto`,
            maxWidth: 900,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 30,
            position: "relative",
            zIndex: 10,
          }}
        >
          <main>{children}</main>
          <footer
            style={{ color: "#eee", height: 80, bottom: 0, marginTop: 100 }}
          >
            © {new Date().getFullYear()}, Artega
          </footer>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
