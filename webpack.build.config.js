'use strict'

const { resolve } = require('path')

const config = {
  mode: 'production',
  entry: './src/gcd.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'gcd.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
