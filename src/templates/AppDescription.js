import React from "react"
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image';
import StoreLink from "../components/storeLink";

const AppDescriptionTemplate = ({ data }) => (
    <Layout>
        <SEO
            title={data.wordpressPost.title}
            description={data.wordpressPost.excerpt}
        />

        <div className="content-app-description">
                <div className="image-container" style={{flex:1}}>
                    <Image style={{}} name={`${data.wordpressPost.title}desktop`}/>
                     {/*<Img style={{marginTop:80, width:380, marginLeft:-14}} fixed={data.imageSharp.fixed}/>*/}
                </div>
                <div className="content-app-description-text" >
                        <h1 style={{marginTop:0, marginBottom:40}}>{data.wordpressPost.title}</h1>
                        <div
                            style={{ marginTop: 0, color: "#eee", marinTop:20 }}
                            dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
                        />
                        <StoreLink name={data.wordpressPost.title}/>
                </div>
        </div>
    </Layout>
)
export default AppDescriptionTemplate

export const query = graphql`
  query($id: Int!, $fixedId: String!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      wordpress_id
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      categories {
             slug
      }
    }
        imageSharp (id: {eq: $fixedId}) {
            id
            fixed {
             src
              srcSet
              srcWebp
              tracedSVG
              aspectRatio
              height
              width
              originalName
            }
        }
      
  }
`
