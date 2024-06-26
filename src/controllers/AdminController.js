class AdminController {
  index(req, res, next) {
    res.render("admin/dashboard", {
      layout: "/admin/layouts/main",
      title: "Quản trị",
      test: "test",
    });
  }

  getLogin(req, res, next) {
    res.render("admin/login");
  }
}

module.exports = new AdminController();
