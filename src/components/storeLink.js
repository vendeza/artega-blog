import React from "react"
import {StaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Image from "./image";

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

const StoreLink = ({name}) => (

    <StaticQuery
        query={graphql`
        query { 
            servizeCover: file(relativePath: { eq: "servize-cover.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 800) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
            ezencielCover: file(relativePath: { eq: "ezenciel-cover.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 800) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
            byroadCover: file(relativePath: { eq: "byroad-cover.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 800) {
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
               case 'ezenciel':
                   return <div className="content-app-description-stores">
                       <Link className="store-link" to={`https://play.google.com/store/apps/details?id=com.ezenciel.mobile`}  target="_blank">
                           <div>
                               <Img fixed={data.googlePlay.childImageSharp.fixed}/>
                           </div>
                       </Link>
                       <Link className="store-link" to={`https://apps.apple.com/ru/app/ezenciel/id1479058033`} target="_blank" >
                           <div style={{ marginLeft:10}}>
                               <Img fixed={data.appStore.childImageSharp.fixed}/>
                           </div>
                       </Link>
                   </div>
                case 'servize':
                    return <div className="content-app-description-stores">
                        <Link className="store-link" to={`https://play.google.com/store/apps/details?id=com.rnbookingapp`}  target="_blank">
                            <div>
                                <Img fixed={data.googlePlay.childImageSharp.fixed}/>
                            </div>
                        </Link>

                    </div>
                case 'byroad':
                    return <div className="content-app-description-stores">
                        <Link className="store-link" to={`https://play.google.com/store/apps/details?id=com.byroad&hl=ru&gl=US`}  target="_blank">
                           <div>
                               <Img fixed={data.googlePlay.childImageSharp.fixed}/>
                           </div>
                       </Link>
                       <Link className="store-link" to={`https://apps.apple.com/us/app/byroad-drive/id1532709482`} target="_blank" >
                           <div style={{ marginLeft:10}}>
                               <Img fixed={data.appStore.childImageSharp.fixed}/>
                           </div>
                       </Link>
                    </div>

                default:
                    return <p>{`Image ${name} is not found`}</p>
            }


        }}
    />
)
export default StoreLink;


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
