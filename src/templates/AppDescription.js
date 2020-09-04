import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AppDescriptionTemplate = ({ data }) => (
    <Layout>
        <SEO
            title={data.wordpressPost.title}
            description={data.wordpressPost.excerpt}
        />
        <h1 style={{marginTop:60}}>{data.wordpressPost.title}</h1>
        <Img style={{marginTop:80}} fixed={data.imageSharp.fixed}/>

        <div
            style={{ marginTop: 20, color: "#eee" }}
            dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
        />
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
