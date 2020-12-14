const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const lessConfig = require("./less.config");
module.exports = {
  entry: ["./index.tsx"],
  output: {
    path: resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "app.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", "less"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)?$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: require.resolve("less-loader"),
            options: {
              sourceMap: true,
              lessOptions: lessConfig,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1,
          name: "[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1,
          name: "[name].[hash:7].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/indx.html",
      minify: {
        collapseWhitespace: true, //压缩html
        removeComments: true, //清除注释
      },
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, "src"),
    //启动压缩
    compress: true,
    //端口号
    port: 3000,
    //是否自动打开服务
    open: true,
    // 开启hmr 可以对样式和css实现热更新功能
    hot: true,
  },
};
