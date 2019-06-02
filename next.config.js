const withImages = require('next-images')

module.exports = withImages({
  webpack(config, options) {
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/Login': { page: '/Login/Login' },
      '/Register': { page: '/Register/RegisterAccount' },
      '/Register': { page: '/Register/RegisterPersonalInfo' },
      '/Register': { page: '/Register/RegisterConfirmation' }
    }
  }
})