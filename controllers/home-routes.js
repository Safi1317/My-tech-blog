const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
	try {
		const dbPosts = await Post.findAll({});

		const posts = dbPosts.map((post) => post.get({ plain: true }));

		res.render("homepage", {
			posts,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// get all post
router.get("/", (req, res) => {
	Post.findAll({
		attributes: ["id", "title", "content", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			res.render("homepage", { posts, loggedIn: req.session.loggedIn });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get single post
router.get("/post/:id", async (req, res) => {
	try {
		const dbPostData = Post.findByPk(req.params.id, {
			include: [
				User,
				{
					model: Comment,
					include: [User],
				},
			],
		});
		if (dbPostData) {
			const post = dbPostData.get({ plain: true });

			res.render("single-post", { post });
		} else {
			res.status(404).end();
		}
	} catch (err) {
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
