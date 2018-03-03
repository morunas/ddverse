'use strict'
// Template version: 1.2.8
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
var _ = require('lodash')

let backendBase = {
  // Root path of server
  root: path.normalize(__dirname),  
  // Server port
  port: process.env.PORT || 8081,
  // Secret for session, you will want to change this and make it an environment variable
  secrets: { session: process.env.SECRET || 'vue-fullstack-demo-secret' },
  // List of user roles
  // userRoles: [],
  // MongoDB connection options
  // mongo: { options: { db: { safe: true } } }
};

///let build = {
///  // Template for index.html
///  index: path.resolve(__dirname, '../dist/index.html'),
///  // Paths
///  assetsRoot: path.resolve(__dirname, '../dist'),
///  assetsSubDirectory: 'static',
///  assetsPublicPath: '/',
///  /**
///   * Source Maps
///   */
///  productionSourceMap: true,
///  // https://webpack.js.org/configuration/devtool/#production
///  devtool: '#source-map',
///  // Run the build command with an extra argument to
///  // View the bundle analyzer report after build finishes:
///  // `npm run build --report`
///  // Set to `true` or `false` to always turn it on or off
///  bundleAnalyzerReport: process.env.npm_config_report
///}

var production = {
  frontend: {
    index: path.resolve(__dirname, './client/dist/index.html'),
    assetsRoot: path.resolve(__dirname, './client/dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  backend: _.merge({}, backendBase, {
    // whether backend servers the frontend, you can use nginx to server frontend and proxy to backend services
    // if set to true, you need no web services like nginx
    serverFrontend: true,
    // Server IP
    ip: process.env.APP_HOST || process.env.APP_IP || process.env.HOST || process.env.IP,
    // Server port
    port: process.env.APP_PORT || process.env.PORT,
    // MongoDB connection options
    /*
    mongo: {
      uri: process.env.MONGODB_URI || process.env.MONGOHQ_URI ||
           'mongodb://localhost/vue-fullstack-demo'
    },
    */
    // frontend folder
    frontend: path.resolve(__dirname, './client/dist')
  })
};

var development = {
  frontend: {
    assetsRoot: path.resolve(__dirname, './src'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': { target: 'http://localhost:' + backendBase.port, changeOrigin: true }
    },
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // only needed for NFS systems to check for file changes
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',
    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: false
  },
  backend: _.merge({}, backendBase, {
    mongo: {
      uri: 'mongodb://localhost:27017'
    }
  })
};

var config = process.env.NODE_ENV === 'production' ? production : development;

module.exports = _.assign({}, config);