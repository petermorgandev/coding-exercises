module.exports = {
  configureWebpack: config => {
    optimization: {
      splitChunks: {
        chunks: "all";
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/water-meter/" : "/"
};
