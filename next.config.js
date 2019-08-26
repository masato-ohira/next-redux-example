// next.config.js
const withSass = require('@zeit/next-sass')
const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      './src/styles/vars.scss',
    ]
  }
}
module.exports = {
  ...withSass({
    // cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    },
    webpack: (config) => {
      config.module.rules.map(rule => {
        if (
          rule.test.source.includes('scss') ||
          rule.test.source.includes('sass')
        ) {
          rule.use.push(resourcesLoader)
        }
      })
      return config
    }
  })
}
