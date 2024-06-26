var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const route = require("./routes");
const hbs = require("express-handlebars");
// var indexRouter = require("../routes/index");
// var usersRouter = require("../routes/users");

var app = express();
hbs.create({
  partialsDir: [path.join(__dirname, "views/admin/partials")],
});

// view engine setup
// app.engine(
//   "hbs",
//   hbs.create({
//     helpers: () => {},
//   })
//   // hbs.engine({
//   //   extname: "hbs",
//   //   // defaultLayout: "",
//   //   // layoutsDir: path.join(__dirname, "views/admin/layouts"),
//   //   // partialsDir: [
//   //   //   //  path to your partials
//   //   //   path.join(__dirname, "views/admin/partials"),
//   //   // ],
//   // })
// );

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

route(app);
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
