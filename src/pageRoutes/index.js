const routes = require("express").Router();

const { requireLogin } = require("./security");

routes.get("/", (req, res) => {
  if (req.session.user) {
    res.render("user/index", { user: req.session.user });
  }
  else {
    res.render("auth/login", { title: "Login" });
  }
});
routes.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
routes.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});
routes.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy", { title: "Privacy Policy" });
});
routes.get("/terms-of-service", (req, res) => {
  res.render("terms-of-service", { title: "Terms of Service" });
});

const auth = require("./auth");
const user = require("./user");
const work = require("./work");
const home = require("./home");

routes.use("/", auth);
routes.use("/user", requireLogin, user);
routes.use("/work", requireLogin, work);
routes.use("/home", requireLogin, home);

module.exports = routes;