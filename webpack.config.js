'use strict';

var webpack = require('webpack');

// Required for postCSS unless your node version is high enough
require('es6-promise').polyfill();

module.exports =  {
  name: 'app',
  context: __dirname + '/client',
  entry: {
    client: 'universal-bootstrap',
    server: ['universal-app']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: '/static'
  },
  module: {
    loaders: [
      { test: /[\/]angular\.js$/, loader: 'exports?angular' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: /(src\/static\/)|(bower_components)/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        include: /(src\/static\/)|(bower_components)/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.html', '.css', '.scss'],
    root: [ __dirname + '/client' ],
    modulesDirectories: [
      'node_modules',
      'bower_components'
    ]
  }
};
