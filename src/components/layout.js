/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Image from '../components/image';
import Header from "./header";
import "./layout.css";

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
            alignSelf: "center",
          }}>

          <div style={{
              position: "fixed",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }} >
              <div style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#000",
                      opacity: 0.6,
                      zIndex: 2,
                  flex:1
                  }}>

              </div>


                <Image  name={'background'}/>


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
            style={{ color: "#eee", height: 80, bottom: 0, marginTop: 500 }}
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
