const express = require("express");
const path = require("path");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use(express.static(path.join(__dirname, "../public")));

const routes = require("./routes");
const api = require("./api");

router.use("/", routes);
router.use("/api", api);

router.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../public/html/error", "404.html"));
});

module.exports = router;