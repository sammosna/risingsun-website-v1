const path = require('path');

const NAVIGATION_LINKS = require('./content/website/navigation-links.json');

/**
 * The configuration file used by Gatsby
 */
module.exports = {
  siteMetadata: {
    title: 'risingsun-website',
    menuLinks: NAVIGATION_LINKS,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~components': path.join(__dirname, 'src/components'),
        '~constants': path.join(__dirname, 'src/constants'),
        '~containers': path.join(__dirname, 'src/containers'),
        '~hooks': path.join(__dirname, 'src/hooks'),
        '~util': path.join(__dirname, 'src/util'),
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          modules: {
            exportLocalsConvention: 'camelCaseOnly',
          },
        },
      },
    },
  ],
};
