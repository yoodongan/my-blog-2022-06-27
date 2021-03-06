module.exports = {
  siteMetadata: {
    title: "나의 개발일지",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
