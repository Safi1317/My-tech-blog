const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/:post_id", withAuth, async (req, res) => {
	try {
		const newComment = await Comment.create({
			...req.body,
			userId: req.session.userId,
			postId: req.params.post_id,
		});
		res.json(newComment);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
