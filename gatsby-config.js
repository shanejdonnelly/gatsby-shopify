module.exports = {
  siteMetadata: {
    title: "Wink Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "wink-bed-2-0",
        accessToken: "",
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
