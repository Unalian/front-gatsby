/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [],
}

module.exports = {
  siteMetadata: {
    title: `Cetacis cloud`,
  },

  plugins: [
    //获得数据（文件内容）的插件
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`, // markdown 转化器
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-remark-code-buttons',
      options: {
        // Optional button container class name. Defaults
        // to 'gatsby-code-button-container'.
        buttonContainerClass: `customButtonContainerClass`,
        // Optional button class name. Defaults to 'gatsby-code-button'.
        buttonClass: `customButtonClass`,
        // Optional button text. Defaults to ''.
        buttonText: `customButtonText`,
        // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
        svgIconClass: `customSvgIconClass`,
        // Optional svg icon. Defaults to svg string and can be
        // replaced with any other valid svg. Use custom classes
        // in the svg string and skip `iconClass` option.
        svgIcon: `customSvgIcon`,
        // Optional tooltip text. Defaults to ''.
        tooltipText: `customTooltipText`,
        // Optional toaster class name. Defaults to ''.
        toasterClass: `customToasterClass`,
        // Optional toaster text class name. Defaults to ''.
        toasterTextClass: `customToasterTextClass`,
        // Optional toaster text. Defaults to ''.
        toasterText: 'customToasterText',
        // Optional toaster duration. Defaults to 3500.
        toasterDuration: 5000
      }
    },

  ],
}

