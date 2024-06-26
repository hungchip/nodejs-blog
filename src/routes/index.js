function route(app) {
  app.use("/", require("./homePage"));
  app.use("/admin", require("./admin"));
}

module.exports = route;
