import React from "react";
import {graphql, Link} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from '../components/image';

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1
      style={{
        marginBottom: 50,
        fontWeight: 600,
        fontSize: 60,
        opacity: 0.9,
      }}
    >
      Select work
    </h1>
    <div className="works" style={{ display: "flex" }}>
        {data.allWordpressPost.edges.map(post => (
        <Link key={post.node.slug} className="work" to={`/app/${post.node.slug}`} >
            <div>
                 <Image  name={`${post.node.slug}`}/>
                 <p>{post.node.title}</p>
            </div>

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


