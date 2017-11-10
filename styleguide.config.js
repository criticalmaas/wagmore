const path = require("path")
const title = require(path.resolve("package.json")).name
module.exports = {
  title: title,
  require: [
    path.join(__dirname, "node_modules/bootstrap/dist/css/bootstrap.min.css")
  ],
  ignore: [path.join(__dirname, "components/Layout.js")],
  sections: [
    {
      name: "UI Components",
      components: "./components/**/!(*.test|blocks).js"
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js(\?[^?]*)?$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        }
      ]
    }
  }
}
