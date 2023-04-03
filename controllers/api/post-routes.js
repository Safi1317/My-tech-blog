const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("posts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
