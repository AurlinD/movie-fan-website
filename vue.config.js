module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/movie-fan-website/" : "/",
  transpileDependencies: ["vuetify"],
};
