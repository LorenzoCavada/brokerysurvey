/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins:300,400,500,600,700`
        ], display: 'swap'
      },
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-VWVZTXY5TD", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      }

    }
  ]
}