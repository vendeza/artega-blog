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
          <h4 style={{ margin: 0, }}>
            <Link
              to="/"
              style={{
                color: `#eee`,
                textDecoration: `none`,
              }}
            >


                <Image name={"logo"}/>


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
                    style={{
                      marginLeft: 20,
                      fontSize: 14,
                      color: `#bbb`,
                        flex:1,
                    }}
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us/"
                    style={{
                      marginLeft: 40,
                      fontSize: 14,
                      color: `#bbb`,
                    }}
                  >
                    Prices
                  </Link>
                </li>

                  <li>
                      <Link
                          to="/about-us/"
                          style={{
                              marginLeft: 40,
                              fontSize: 14,
                              color: `#bbb`,
                          }}
                      >
                          About us
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
