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
        marginTop: 40,
        marginBottom: 40,
        fontWeight: 900,
        fontSize: 50,
        opacity: 0.9,
        lineHeight: 1.1,
        textTransform: "uppercase",
      }}
    >
      We craft awesome apps
    </h1>
    <h1
      style={{
        marginTop: 50,
        marginBottom: 50,
        fontWeight: 600,
        fontSize: 40,
        opacity: 0.9,
        textTransform: "uppercase",
      }}
    >
      Works
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

    <h1
      style={{
        marginTop: 100,
        marginBottom: 40,
        fontWeight: 600,
        fontSize: 40,
        opacity: 0.9,
        textTransform: "uppercase",
      }}
    >
      How we work
    </h1>
    <ul
      style={{
        color: "#eee",
      }}
    >
      <li>Discuss your business problems</li>
      <li>Deep research your business area</li>
      <li>Suggest you the best solution</li>
      <li>Create estimate document</li>
      <li>Develop the app</li>
      <li>Support your app</li>
    </ul>
    <div
      className="team"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    ></div>
    <h1
      style={{
        marginTop: 100,
        marginBottom: 40,
        fontWeight: 400,
        fontSize: 20,
        opacity: 0.9,
      }}
    >
      Prices
    </h1>
    <ul
      style={{
        color: "#eee",
      }}
    >
      <li>Mobile application start from: 990$ </li>
      <li>Web application start from: 490$</li>
      <li>UX/UI design start from: 490$</li>
    </ul>
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


