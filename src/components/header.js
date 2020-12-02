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
      <header>
        <div
          className="innerHeader"
        >
          <h4  className="logo" >
            <Link
              to="/"

              style={{
                color: `#111`,
                textDecoration: `none`,
              }}
            >

                ARTEGA

            </Link>
          </h4>
          <nav>
              <ul style={{ listStyle: `none`, display:'flex', marginBottom:0,
                  flexDirection:'row',
                  alignItems:'center', justifyContent:'center',
                  flexWrap:'wrap', paddingRight:20}}>
                <li>
                  <Link
                    to="/"
                    className="nav-link"
                  >
                    Works
                  </Link>
                </li>


                  <li>
                      <Link
                          to="/about-us/"
                          className="nav-link"
                      >
                          About
                      </Link>
                  </li>
                  
                  <li>
                      <Link
                          to="/blog/"
                          className="nav-link"
                      >
                          Blog
                      </Link>
                  </li>

              </ul>
          </nav>
        </div>
      </header>
    )}
  />
);

export default Header;
