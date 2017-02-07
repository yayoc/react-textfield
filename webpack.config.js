const path = require('path');
const fs = require('fs');

const srcFolder = path.join(__dirname, 'src', 'components');
const components = fs.readdirSync(srcFolder);

const files = [];
const entries = {};
components.forEach(component => {
  const name = component.split('.')[0];
  const file = `./src/components/${name}`;
  files.push(file);
  entries[name] = file;
});


module.exports = {
  entry: entries,
  output: {
    path: './lib/components/',
    filename: '[name].js',
    library: 'ReactTextField',
    libraryTarget: 'commonjs2',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss!',
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
};
