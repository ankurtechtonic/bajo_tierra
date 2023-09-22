const withImages = require('next-images')
const webpack =require('webpack')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  // webpack(config, options) {
  //       config.plugins.push(new webpack.DefinePlugin({
  //           'process.env.API_URL': JSON.stringify('http://3.7.85.255:1346/')
  //       }));
  //   return config
  // },
  devIndicators: {
    autoPrerender: false,
  },
  target:'serverless'
})







