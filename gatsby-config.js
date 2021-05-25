module.exports = {
  siteMetadata: {
    title: "Wink Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: "shanes-gatsby-trial.myshopify.com",
        password: "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",
        apiKey: "940531e011a3dc0a43b8ede08ad9efa5",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
