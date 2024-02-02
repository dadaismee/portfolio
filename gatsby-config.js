/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Valerii Shevchenko | Ed Product Manager and UX Engineer`,
    description: `As a ux engineer, educator, manager and philosopher of science, I mainly design and code interfaces, develop and launch educational courses, write academic papers and occasinally teach. Needless to say how unique my perspective is, right?. Explore my work now (or maybe later).`,
    keywords: `designer, React, product manager, edtech, UX/UI design, branding, product design, generative art, algorithmic design, design consultant, modern products, Valerii Shevchenko, portfolio`,
    siteUrl: `https://valerii.sh`,
    image: `/images/icon.png`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 1000,
        offset: -50,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/projects/',
      },
      __key: 'projects',
    },
  ],
};
