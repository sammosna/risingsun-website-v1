const path = require('path');

const NAVIGATION_LINKS = require('./content/website/navigation-links.json');
const SEO = require('./content/website/seo.json');

/**
 * The configuration file used by Gatsby
 */
module.exports = {
  siteMetadata: {
    title: 'RisingSun | What Falls - Must Rise Again',
    menuLinks: NAVIGATION_LINKS,
    ...SEO,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~animations': path.join(__dirname, 'src/animations'),
        '~components': path.join(__dirname, 'src/components'),
        '~constants': path.join(__dirname, 'src/constants'),
        '~containers': path.join(__dirname, 'src/containers'),
        '~hooks': path.join(__dirname, 'src/hooks'),
        '~sections': path.join(__dirname, 'src/sections'),
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
