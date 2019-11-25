let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)
require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `React Movie DB`,
    description: `react project using the Movie Database Api`,
    author: `Lewis Matos`,
    tmdb_url: `${process.env.API_URL}`,
    tmdb_api_key: `${process.env.API_KEY}`,
    search_url: `${process.env.API_URL}search/movie?api_key=${process.env.API_KEY}&query=`,
    top_rated_endpoint: `${process.env.API_URL}movie/top_rated?api_key=${process.env.API_KEY}`,
    popular_endpoint: `${process.env.API_URL}movie/popular?api_key=${process.env.API_KEY}`,
    image_url: `https://image.tmdb.org/t/p/`,
    image_size: `w780`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Droid Serif'],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
