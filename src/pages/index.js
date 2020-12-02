import React from "react";
import {graphql, Link} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from '../components/image';

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h3>We develop eCommerce mobile apps for your business</h3>
    <h1
    >
      Works
    </h1>
    <div className="works" style={{ display: "flex" }}>
        {data.allWordpressPost.edges.map(post => (
        <Link key={post.node.slug} className="work" to={`/app/${post.node.slug}`} >
            <div className="image-work">
                 <Image  name={`${post.node.slug}cover`}/>

            </div>
            <p className="label-work">{post.node.title}</p>
         </Link>
     ))}
    </div>


  </Layout>
);
export default SecondPage
export const query = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "app"}}}}) {
      edges {
        node {
          title
          excerpt
          slug
          wordpress_id
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
          
        }
      }
    }
  }
`


