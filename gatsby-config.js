const dotenv =  require('dotenv')
dotenv.config()


module.exports = {
  siteMetadata: {
    title: "Benjamin Geyer - Software Engineer - San Diego, CA",
    author: "Benjamin Geyer",
    description: "Portfolio website for Benjamin Geyer"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-zesty',
      options: {
        email: `${process.env.EMAIL}`,
        password: `${process.env.PASSWORD}`,
        instanceZUID:'8-cec2d6e884-zjsq8n',
        models: {
          Projects:'6-d4a088a3e8-npw7b3',
        },
      },
    },
  ],
}
