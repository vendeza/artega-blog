import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";
import Image from '../components/image';
import logo from "../images/artega_logo.png";
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
          top: 30,
          position: "relative",
          zIndex: 12,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 900,
            padding: `0.5rem 0.5rem 0.5rem 1.45rem`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <h1 style={{ margin: 0 }}>
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
                  {/* <p style={{ marginBottom: 0, marginLeft: 10, fontSize: 14 }}>
                    web & mobile tech
                  </p> */}
                  {/* <p
                    style={{
                      marginTop: 1,
                      marginBottom: 0,
                      marginLeft: 10,
                      fontSize: 15,
                    }}
                  >
                    for your business
                  </p> */}
                </div>
              </div>
              {/* {data.wordpressSiteMetadata.name} */}
              {/* <Img
                  sizes={post.node.acf.feat_img.localFile.childImageSharp.sizes}
                  alt={post.node.title}
                  style={{ width: "25%", marginRight: 20 }}
                /> */}
            </Link>
          </h1>

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
            {/*<li>*/}
            {/*  <Link*/}
            {/*    to="/blog/"*/}
            {/*    style={{*/}
            {/*      marginLeft: 20,*/}
            {/*      fontSize: 14,*/}
            {/*      color: `#bbb`,*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    Blog*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {/* {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug} style={{ margin: `0 10px` }}>
                <Link
                  to={`/${item.object_slug}`}
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                    fontFamily: `sans-serif`,
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
      </header>
    )}
  />
);

export default Header;
