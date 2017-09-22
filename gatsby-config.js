module.exports = {
  pathPrefix: `/website`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
  siteMetadata: {
    title: `Smart Binary, LLC`,
  },
}
