const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/Login': { page: '/Login/Login' },
      '/RegisterAccount': { page: '/Register/RegisterAccount' },
      '/RegisterPersonalInfo': { page: '/Register/RegisterPersonalInfo' },
      '/RegisterConfirmation': { page: '/Register/RegisterConfirmation' }
    }
  }
})