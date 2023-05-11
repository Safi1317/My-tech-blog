const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
	
	const posts = await Post.findAll()

	res.render('posts', { posts });
})

// create
router.post("/", withAuth, async (req, res) => {
	console.log(req.body);
	try {
		const newPost = await Post.create({
			...req.body,
			userId: req.session.userId,
		});
		console.log(newPost);
		res.json(newPost);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// update
router.put("/:id", withAuth, async (req, res) => {
	try {
		console.log(req.body);
		const [affectedRows] = await Post.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		if (affectedRows > 0) {
			res.status(200).end();
		} else {
			res.status(400).end();
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// delete
router.delete("/:id", withAuth, async (req, res) => {
	try {
		const affectedRows =await Post.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (affectedRows > 0) {
			res.status(200).end();
		} else {
			res.status(400).end();
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
