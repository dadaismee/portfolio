const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query projects {
      allProjectsJson {
        nodes {
          frontmatter {
            url
            tags
          }
        }
      }
    }
  `);

  data.allProjectsJson.nodes.forEach((node) => {
    const { url } = node.frontmatter;
    actions.createPage({
      path: `/${url}`,
      component: path.resolve('./src/templates/project.js'),
      context: { url, tags },
    });
  });
};
