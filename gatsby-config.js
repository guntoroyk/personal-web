require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Guntoro Yudhy`,
    siteTitleAlt: `Guntoro Yudhy - Personal Website`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Portfolio`,
            slug: `/portfolio`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/guntoroyk`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/guntoroyk`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/guntoro.yk/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guntoro Yudhy Kusuma - Student, Freelancer, Full Stack Engineer`,
        short_name: `guntoro-yudhy-kusuma`,
        description: `Hi, I'm Guntoro! I'm a student of UGM majoring in Internet Engineering Technology. Besides as student, I also work as freelancer and partimer in software engineer field. I've strong passion in backend and frontend stack. Also, I'm interested in learning and exploring new things about tech such cloud computing, computer network, and devops.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
};
