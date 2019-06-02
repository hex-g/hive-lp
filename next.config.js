const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
})