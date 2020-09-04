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
                fixed(width: 2400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
          }
      `}

      render={data => {
          switch(name){
              case 'ezenciel':
                  return <Img fixed={data.ezenciel.childImageSharp.fixed}/>
              case 'servize':
                  return <Img fixed={data.servize.childImageSharp.fixed}/>
              case 'background':
                  return <Img style={{height:1180, width:1400}} fixed={data.background.childImageSharp.fixed}/>
              case 'logo':
                  return <Img style={{height:50, width:50}} fixed={data.logo.childImageSharp.fixed}/>
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
