/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Alex Krall`,
    author: `Alex Krall`,
    firstName: `Alex`,
    lastName: `Krall`,
    description: `Alex Krall's personal site`,
    contactEmail: `axkrall@gmail.com`,
    occupation: `Software Engineering Leadership`,
    tagline: [
      `Leading software product teams to achieve dreams. 💪`,
      `I also love memes.`,
    ],
    keywords: [
      `Alex`,
      `Krall`,
      `Alex Krall`,
      `Resume`,
      `Projects`,
      `Work`,
      `Software Development`,
      `MVP`,
    ],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Coding Monkey`,
      `Jedi Master`,
      `Binary Sunset Enthusiast`,
      `Moisture Farmer`,
    ],
    readingList: [
      {
        title: `Oathbringer`,
        author: `Brandon Sanderson`,
        link: `https://www.goodreads.com/book/show/34002132-oathbringer`,
      },
      {
        title: `So You Want To Talk About Race`,
        author: `Ijeoma Oluo`,
        link: `https://www.goodreads.com/book/show/35099718-so-you-want-to-talk-about-race`,
      },
      {
        title: `The Fifth Season`,
        author: `N.K. Jemisin`,
        link: `https://www.goodreads.com/book/show/19161852-the-fifth-season`,
      },
    ],
    showsList: [
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Krall's Personal Site`,
        short_name: `A.Krall`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/icons/flexed-biceps.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GraphCMS",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "graphcms",
        // Url to query from
        url:
          "https://api-us-east-1.graphcms.com/v2/ckdenpclep3u301z8bzdjeiuq/master",
      },
    },
  ],
}
