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
      <div className="main-wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />


        <div
            className="layout-wrapper"

        >
          <main>{children}</main>
          <footer
            style={{height: 80, bottom: 0, marginTop: 500 }}
          >
              <p>
            © {new Date().getFullYear()}, Artega
              </p>
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
