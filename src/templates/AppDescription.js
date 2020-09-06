import React from "react"
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image';

const AppDescriptionTemplate = ({ data }) => (
    <Layout>
        <SEO
            title={data.wordpressPost.title}
            description={data.wordpressPost.excerpt}
        />

        <div className="content-app-description">
                <div style={{flex:1,maxWidth:450}}>
                    <Image style={{}} name={`${data.wordpressPost.title}desktop`}/>
                     {/*<Img style={{marginTop:80, width:380, marginLeft:-14}} fixed={data.imageSharp.fixed}/>*/}
                </div>
                <div style={{ flex:1, maxWidth: 450 }}>
                        <h1 style={{marginTop:0, marginBottom:40}}>{data.wordpressPost.title}</h1>
                        <div
                            style={{ marginTop: 0, color: "#eee", marinTop:20 }}
                            dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
                        />
                        <div className="content-app-description-stores">
                                <Link className="store-link" to={`https://play.google.com/store/apps/details?id=com.rnbookingapp`}  target="_blank">
                                        <div>
                                           <Image style={{}} name={`googlePlay`}/>
                                        </div>
                                </Link>
                                <Link className="store-link" to={`https://apps.apple.com/ru/app/ezenciel/id1479058033`} target="_blank" >
                                        <div style={{ marginLeft:10}}>
                                            <Image  name={`appStore`}/>
                                        </div>
                                 </Link>
                        </div>
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
