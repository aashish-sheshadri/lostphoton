const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Lost Photon', // Navigation and Site Title
  siteTitleAlt: 'Aashish Sheshadri', // Alternative Site title for SEO
  siteTitleShort: 'Aashish Sheshadri', // short_name for manifest
  siteHeadline: 'Landscape and Astrophotography by Aashish Sheshadri', // Headline for schema.org JSONLD
  siteUrl: 'http://www.lostphoton.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Landscape Photography and Astrophotography Gallery',
  author: 'Aashish Sheshadri', // Author for schema.org JSONLD

  // siteFBAppID: '', // Facebook App ID - Optional
  userTwitter: '@aasheshadri', // Twitter Username
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-144975191-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
