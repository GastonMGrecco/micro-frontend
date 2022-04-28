const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081, // Port in each micro frontend in which will running
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["@babel/plugin-transform-runtime"],
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "anotherMicroFrontend",
      filename: "remoteEntry.js",
      //Use only  remote property when you are created a container to receive a microfrontend-child
      remotes: {
        // AnotherMicroFrontend:
        //   "anotherMicroFrontend@http://domain/remoteEntry.js", //This is an example
      },
      //Use only when this component will be a child micro frontend
      exposes: {
        "./MicroFrontendApp": "./src/Child.js", //This is an example
      },

      shared: ["react"],
    }),
  ],
};
