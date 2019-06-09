let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `working life history of Takayasu Nasu`,
    description: `優秀なプログラマ/ソフトウェアエンジニアを募集中でしょうか? Are you looking for an excellent programmer / software engineer? 私は東京に拠点を置くプログラマー、フルスタックエンジニアです。プログラミング以外にも、システム設計、サーバー構築、およびHTMLコーディングを使用できます。I'm a programmer and a full stack engineer based in Tokyo. Besides programming, I can use system design, server construction, and HTML coding. Let me show you my skills and career.`,
    author: `@TakayasuNasu`,
    siteUrl: `https://www.i-nasu.com`,
  },
  assetPrefix: `/assets`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_TOKEN,
        baseId: process.env.AIRTABLE_BASEID,
        tableName: `Projects`,
        tableView: `Grid view`,
      },
    },
    {
      resolve: `gatsby-plugin-no-sourcemaps`,
    },
  ],
}
