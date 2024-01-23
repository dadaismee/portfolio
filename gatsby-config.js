/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Valerii Shevchenko | Design engineer and eudcator`,
    description: `As a design engineer, educator and philosopher of science, I mainly design and code interfaces, develop and launch educational courses, write academic papers and occasinally teach and make algorithmic art. Needless to say how (surely) unique my perspective is. If you want, you can explore my work now (or later).`,
    keywords: `designer, product manager, UX/UI design, branding, product design, generative art, algorithmic design, design consultant, modern products, Valerii Shevchenko, portfolio`,
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
