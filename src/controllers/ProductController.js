class ProductController {
  index(req, res, next) {
    res.render("admin/product", {
      layout: "/admin/layouts/main",
      title: "Sản phẩm",
      test: "test",
    });
  }

}

module.exports = new ProductController();
