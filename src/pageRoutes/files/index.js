const routes = require("express").Router();

routes.get("/", (req, res) => {
   res.render("files", { title: "Files" });
 });

module.exports = routes;