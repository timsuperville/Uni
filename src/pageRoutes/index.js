const routes = require("express").Router();
const { requireLogin, requireAdmin } = require("../middleware/auth");

routes.get("/", (req, res) => {
  if (req.session.user) {
    res.render("user/index", { user: req.session.user });
  }
  else {
    res.render("auth/login", { title: "Login" });
  }
});
routes.get("/welcome", (req, res) => {
  res.render("index", { title: "Welcome" });
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

routes.get("/files", (req, res) => {
  res.render("files", { title: "Files" });
});

const admin = require("./admin");
const auth = require("./auth");
const church = require("./church");
const home = require("./home");
const org = require("./org");
const user = require("./user");
const work = require("./work");

routes.use("/admin", requireAdmin, admin);
routes.use("/", auth);
routes.use("/church", requireLogin, church);
routes.use("/home", requireLogin, home);
routes.use("/org", requireLogin, org);
routes.use("/user", requireLogin, user);
routes.use("/work", requireLogin, work);

routes.use((req, res, next) => {
  res.status(404).send('Page not found');
});

module.exports = routes;