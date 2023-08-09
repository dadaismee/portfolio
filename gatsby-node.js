const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query projects {
      allProjectsJson {
        nodes {
          frontmatter {
            url
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
      context: { url },
    });
  });

  // const tagsData = ['PM-LX', 'UX-UI', 'Branding', 'WebDev', '3D', 'Art'];
  // tagsData.forEach((tag) => {
  //   actions.createPage({
  //     path: `/${tag}`,
  //     component: path.resolve('./src/components/index.js'),
  //     context: { tag },
  //   });
  // });
};
