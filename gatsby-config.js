const config = require('./config/website')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix


module.exports = {
  /* General Information */
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: 'Aashish Sheshadri',
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'Landscapes',
        link:'/landscapes'
      },
      {
        name:'Milkyway',
        link:'/milkyway'
      },
      {
        name:'Galaxies',
        link:'/galaxies'
      },
      {
        name:'Nebulae',
        link:'/nebulae'
      },
      {
        name:'Solar System',
        link:'/solarsystem'
      },
      {
        name:'Clusters',
        link:'/starclusters'
      }
    ]
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/gallery/`,
        name: 'content/gallery',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/landscapes/`,
        name: 'content/landscapes',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/milkyway/`,
        name: 'content/milkyway',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/galaxy/`,
        name: 'content/galaxy',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/nebulae/`,
        name: 'content/nebulae',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/solarsystem/`,
        name: 'content/solarsystem',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/starclusters/`,
        name: 'content/starclusters',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "2081571666.1677ed0.3eafa6e072064264b7ae463af105f109"
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'lostphoton.com'
      }
    },
    'gatsby-plugin-typescript',
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
