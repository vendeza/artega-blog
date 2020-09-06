import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({name}) => (

  <StaticQuery
      query={graphql`
        query { 
            servizeCover: file(relativePath: { eq: "servize-cover.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
            ezencielCover: file(relativePath: { eq: "ezenciel-cover.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
            byroadCover: file(relativePath: { eq: "byroad-cover.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
        
        
            ezenciel: file(relativePath: { eq: "ez.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 278) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            servize: file(relativePath: { eq: "servize.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 278) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
            ezencielDesktop: file(relativePath: { eq: "ez.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            servizeDesktop: file(relativePath: { eq: "servize.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            byroadDesktop: file(relativePath: { eq: "byroad-cover.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 800) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
            background: file(relativePath: { eq: "bg1.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(height: 1000) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
             logo: file(relativePath: { eq: "artega_logo.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
            appStore: file(relativePath: { eq: "appStoreIcon.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 120) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
            googlePlay: file(relativePath: { eq: "googlePlayIcon.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 120) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
      `}

      render={data => {
          switch(name.toLowerCase()){
              case 'servizecover':
                  return <Img style={{width:278, height:278}} fixed={data.servizeCover.childImageSharp.fixed}/>
              case 'ezencielcover':
                  return <Img style={{width:278, height:278}} fixed={data.ezencielCover.childImageSharp.fixed}/>
              case 'byroadcover':
                  return <Img style={{width:278, height:278}} fixed={data.byroadCover.childImageSharp.fixed}/>
              case 'ezenciel':
                  return <Img fixed={data.ezenciel.childImageSharp.fixed}/>
              case 'servize':
                  return <Img  fixed={data.servize.childImageSharp.fixed}/>
              case 'ezencieldesktop':
                  return <Img  className="workCoverImage"fixed={data.ezencielDesktop.childImageSharp.fixed}/>
              case 'servizedesktop':
                  return <Img  className="workCoverImage" fixed={data.servizeDesktop.childImageSharp.fixed}/>
              case 'byroaddesktop':
                  return <Img  className="workCoverImage" fixed={data.byroadDesktop.childImageSharp.fixed}/>
              case 'background':
                  return <Img  style={{marginLeft:1000,height:900, width:900}} fixed={data.background.childImageSharp.fixed}/>
              case 'logo':
                  return <Img style={{height:40, width:40}} fixed={data.logo.childImageSharp.fixed}/>
              case 'appstore':
                  return <Img fixed={data.appStore.childImageSharp.fixed}/>
              case 'googleplay':
                  return <Img fixed={data.googlePlay.childImageSharp.fixed}/>
              default:
                  return <p>{`Image ${name} is not found`}</p>
          }


      }}
  />
)
export default Image


/*
import safeGet from 'lodash.get'
import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { internal: { mediaType: { regex: "/image/" } } } ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => (
    data.allFile.nodes.find(({ relativePath }) => src === relativePath)
  ), [ data, src ])

  const fluid = safeGet(match, 'childImageSharp.fluid')

  return fluid ? (
    <Img
      fluid={fluid}
      Tag='div'
      {...props}
    />
  ) : null
}

export default Image
*
 */
