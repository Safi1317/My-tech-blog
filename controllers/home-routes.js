const router = require("express").Router();
const { user, post, comment } = require("../models");
const withAuth = require("../utils/helpers");
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  console.log("route hit");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
