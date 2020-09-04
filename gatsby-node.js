/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const AppDescriptionTemplate = path.resolve("./src/templates/AppDescription.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
            categories {
              name
            }
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      
      allWordpressWpMedia {
        edges {
          node {
            post
            alt_text
            localFile {
              url
              name
              ext
            }
            wordpress_id
          }
        }
      }
      
      allImageSharp {
        edges {
          node {
            fixed {
              src
              srcSet
              srcSetWebp
              srcWebp
              originalName
            }
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const allMediaArr = result.data.allWordpressWpMedia.edges;
    const allImageSharpArr = result.data.allImageSharp.edges;
    const allWordpressPostArr = result.data.allWordpressPost.edges;

    const mediaAndImageSharpArr = allImageSharpArr.map(imageSharp=>{
      const imageGroupSharp = allMediaArr.filter(m=>
          m.node.alt_text === "preview" && (m.node.localFile.name+m.node.localFile.ext) === imageSharp.node.fixed.originalName)[0];

      if(imageGroupSharp) {
         return {...imageSharp.node, ...imageGroupSharp.node}
      }
    });

    //console.log("MediaArr: " +JSON.stringify(mediaAndImageSharpArr));

   /** EXAMPLE
    * {
              "fixed":{
                 "src":"/static/3b8de3be9991ff6e5e37fd8f853be45f/497c6/8193772e9c6f22a39a766cd7cafe74b0.png",
                 "srcSet":"/static/3b8de3be9991ff6e5e37fd8f853be45f/497c6/8193772e9c6f22a39a766cd7cafe74b0.png 1x",
                 "srcSetWebp":"/static/3b8de3be9991ff6e5e37fd8f853be45f/1f5c5/8193772e9c6f22a39a766cd7cafe74b0.webp 1x",
                 "srcWebp":"/static/3b8de3be9991ff6e5e37fd8f853be45f/1f5c5/8193772e9c6f22a39a766cd7cafe74b0.webp",
                 "originalName":"8193772e9c6f22a39a766cd7cafe74b0.png"
              },
              "id":"bc97142b-fee0-52c2-89da-6a1ba292d91f",
              "post":18,
              "alt_text":"",
              "localFile":{
                 "url":"http://avanesyan.beget.tech/wp-content/uploads/2020/07/8193772e9c6f22a39a766cd7cafe74b0.png",
                 "name":"8193772e9c6f22a39a766cd7cafe74b0",
                 "ext":".png"
              },
              "wordpress_id":29
       },
    */

    const appPosts = allWordpressPostArr.filter(post=>{
        return post.node.categories[0].name==='app';
    });


    const postsWithMedia= appPosts.map(post=>{
        const postMedia= mediaAndImageSharpArr.filter(m=>
          m && m.post === post.node.wordpress_id
        );

        return {...post, postMedia};
    });

    //console.log("postsWithMedia: " +JSON.stringify(postsWithMedia));

      /** EXAMPLE
       * {
          "node":{
             "slug":"servize",
             "wordpress_id":70,
             "categories":[
                {
                   "name":"app"
                }
             ]
          },
          "postMedia":[
                 {
                    "fixed":{
                       "src":"/static/75b17a962e7fafec4eb49f38c643ead1/497c6/servize.png",
                       "srcSet":"/static/75b17a962e7fafec4eb49f38c643ead1/497c6/servize.png 1x,\n/static/75b17a962e7fafec4eb49f38c643ead1/2a4de/servize.png 1.5x,\n/static/75b17a962e7fafec4eb49f38c643ead1/ee604/servize.png 2x",
                       "srcSetWebp":"/static/75b17a962e7fafec4eb49f38c643ead1/1f5c5/servize.webp 1x,\n/static/75b17a962e7fafec4eb49f38c643ead1/ad85c/servize.webp 1.5x,\n/static/75b17a962e7fafec4eb49f38c643ead1/58556/servize.webp 2x",
                       "srcWebp":"/static/75b17a962e7fafec4eb49f38c643ead1/1f5c5/servize.webp",
                       "originalName":"servize.png"
                    },
                    "id":"c5f38376-9029-5d5b-be72-8e1dd71a5b28",
                    "post":70,
                    "alt_text":"preview",
                    "localFile":{
                       "url":"http://avanesyan.beget.tech/wp-content/uploads/2020/09/servize.png",
                       "name":"servize",
                       "ext":".png"
                    },
                    "wordpress_id":71
                 }
              ]
           }
       */
      postsWithMedia.forEach(post => {
      console.log("CREATEPAGE" + JSON.stringify(post.postMedia[0].id));
      createPage({
        path: `/app/${post.node.slug}`,
        component: AppDescriptionTemplate,
        context: {
          id: post.node.wordpress_id,
          fixedId:post.postMedia[0].id
        },
      })
    });


    const BlogPosts = result.data.allWordpressPost.edges
    BlogPosts.forEach(post => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })

      const Pages = result.data.allWordpressPage.edges
      Pages.forEach(page => {
        createPage({
          path: `/${page.node.slug}`,
          component: PageTemplate,
          context: {
            id: page.node.wordpress_id,
          },
        })
      })
    })
  })
}
