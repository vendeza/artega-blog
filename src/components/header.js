import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import logo from "../images/artega_logo.png"
const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
      }
    `}
    render={data => (
      <header
        style={{
          background: `rgb(20, 29, 35)`,
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
              <img src={logo} style={{ height: 50, width: 50 }} />
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
                  marginLeft: 10,
                  fontSize: 14,
                  color: `#bbb`,
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/page-2/"
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  color: `#bbb`,
                }}
              >
                Blog
              </Link>
            </li>
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
)

export default Header
