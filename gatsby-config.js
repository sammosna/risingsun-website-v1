const path = require('path');

/**
 * The configuration file used by Gatsby
 */
module.exports = {
  siteMetadata: {
    title: 'risingsun-website',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~components': path.join(__dirname, 'src/components'),
      },
    },
  ],
};
