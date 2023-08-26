/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Valerii Shevchenko | Product and service designer`,
    description: `UX/UI, branding, 3D, and product/service design. With a unique blend of a background in education, product management, and generative art, I create modern and conceptual products that resonate. Explore my work now.`,
    keywords: `designer, product manager, UX/UI design, branding, 3D design, product design, service design, generative art, algorithmic design, design consultant, modern products, Valerii Shevchenko, portfolio`,
    siteUrl: `https://valerii.sh`,
    image: `/images/icon.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-T3JZPJ7CFQ'],
        pluginConfig: {
          head: true,
        },
      },
    },
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
