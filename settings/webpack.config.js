// plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackAssetTemplatePlugin = require('@intervolga/html-webpack-asset-template-plugin');
const HtmlIndexPlugin = require('@intervolga/html-index-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const PostCompile = require('post-compile-webpack-plugin');

// config
const fs = require('path');
const path = require('path');
const branch = require('git-branch');
const utils = require('./utils');
const pkg = require('../package.json');

const mode = process.env.NODE_ENV || 'production';
const modeBranch = process.env.branch || false;
const modeProduction = mode === 'production';

const page = process.env.page;
const branchName = modeBranch && branch.sync();
const publicPath = !modeBranch && modeProduction ? pkg.publicPath : '';
const proxy = pkg.proxy || '';
const dirProject = path.resolve(__dirname, '../');

const src = path.join(dirProject, 'src');
const srcBundles = path.join(src, 'bundles');
const srcGlobalSass = path.join(src, 'sass-globals', 'sass-globals.scss');

const pathsBundles = utils.getAllFilesInPathSync(srcBundles, [], false)
  .filter((path) => /\.bemjson\.js$/i.test(path));

const pathsTmpls = utils.getAllFilesInPathSync(src)
  .filter((path) => /.tmpl-specs.*\.bemjson\.js$/i.test(path));


const fileName = {
  dir: modeBranch ? ['branch', branchName].join('/') : modeProduction ? 'dist' : 'build',
  main: 'assets/[name].js',
  asset: 'assets/[path][name].[ext]',
  css: '[name].css',
};

const entries = pathsBundles; // [...pathsBundles, ...pathsTmpls];
const outputPath = path.join(dirProject, fileName.dir);

const entry = modeProduction ?
  {merged: entries}:
  entries.reduce((entries, entry) => {
    entries[path.basename(entry, '.js')] = entry;
    return entries;
  }, {});

module.exports = {
  mode,
  entry,
  output: {
    path: outputPath,
    filename: fileName.main,
    publicPath,
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'swiper': 'swiper/dist/js/swiper.min.js',
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        bh: {
          test: /bh\.js$/,
          name: 'merged.bh',
          priority: 0,
        },
      },
    },
  },
  devServer: {
    contentBase: outputPath,
    host: '0.0.0.0',
    overlay: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    proxy: {
      '/proxy': {
        target: proxy,
        pathRewrite: {
          '^/proxy': '',
        },
        changeOrigin: true,
        secure: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff)(\?v=[\d+.]+)?$/,
        loader: 'file-loader', options: {name: fileName.asset},
      },
      {
        test: /\.woff2(\?v=[\d+.]+)?$/,
        loader: 'url-loader', options: {name: fileName.asset, limit: 3072},
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {loader: 'file-loader', options: {name: fileName.asset}},
          {loader: 'image-webpack-loader', options: {disable: !modeProduction}},
        ],
      },
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {minimize: modeProduction, sourceMap: modeProduction, importLoaders: 1}},
            {loader: 'postcss-loader', options: {sourceMap: modeProduction}},
          ],
        }),
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {minimize: modeProduction, sourceMap: modeProduction, importLoaders: 1}},
            {loader: 'postcss-loader', options: {sourceMap: modeProduction}},
            {
              loader: 'sass-loader',
              options: {sourceMap: modeProduction, outputStyle: 'expanded', data: `@import ${JSON.stringify(srcGlobalSass)};`},
            },
          ],
        }),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader', options: {cacheDirectory: !modeProduction, babelrc: true}},
      },
      {
        test: /\.bemjson\.js$/,
        use: [
          {loader: 'babel-loader', options: {cacheDirectory: !modeProduction, babelrc: true}},
          '@intervolga/bemrequire-loader',
          {
            loader: '@intervolga/bembh-loader',
            options: {client: 'static', bhFilename: require.resolve('@intervolga/bh-ext')},
          },
          {
            loader: '@intervolga/bemdeps-loader',
            options: {levels: pkg.bemLevels, techMap: pkg.bemTechs},
          },
          {
            loader: '@intervolga/bemdecl-loader',
            options: {levels: pkg.bemLevels},
          },
          '@intervolga/bemjson-loader',
          '@intervolga/eval-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outputPath]),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(mode),
      'LANG': JSON.stringify('ru'),
    }),
    new webpack.ProvidePlugin({}),
    new ExtractTextPlugin({
      allChunks: true,
      filename: fileName.css,
      disable: !modeProduction,
    }),
    ...pathsBundles.map((bemJsonName) => {
      const base = path.basename(bemJsonName, '.js');
      return new HtmlWebpackPlugin({
        chunks: [modeProduction ? 'merged' : base],
        filename: base + '.html',
        xhtml: true,
      });
    }),
    new HtmlWebpackAssetTemplatePlugin(),
    new HtmlIndexPlugin(),
    new CopyWebpackPlugin([
      {from: path.join(srcBundles, '**', '*.{jpeg,jpg,png,gif,svg,ico,json}'), context: srcBundles},
    ]),
    new ImageminPlugin({test: /\.(jpe?g|png|gif|svg)$/i, disable: modeProduction}),
    new VueLoaderPlugin(),
    ...modeProduction ?
      [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false,
        }),
        new OptimizeCssnanoPlugin({
          sourceMap: true,
          cssnanoOptions: {preset: ['default', {discardComments: {removeAll: true}}]},
        }),
        new PostCompile(() => {
          // TODO: Необходимо удалить файлы примеров
        }),
      ] : [],
  ],
};
