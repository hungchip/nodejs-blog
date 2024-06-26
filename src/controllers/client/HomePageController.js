class HomePageController {
  index(req, res, next) {
    res.render("client/dashboard", { layout: "client/layouts/index" });
  }
}

module.exports = new HomePageController();
