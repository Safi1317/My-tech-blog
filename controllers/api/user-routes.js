const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

// CREATE new user
router.post("/", async (req, res) => {
	try {
		const dbUserData = await User.create(req.body);
		console.log("data", dbUserData);

		req.session.save(() => {
			req.session.loggedIn = true;

			res.status(200).json(dbUserData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Login
router.post("/login", async (req, res) => {
	try {
		console.log(1);
		const dbUserData = await User.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (!dbUserData) {
			console.log();
			res
				.status(400)
				.json({ message: "Incorrect email or password. Please try again!" });
			return;
		}

		const validPassword = await bcrypt.compare(
			req.body.password,
			dbUserData.password
		);

		// if (req.body.password != dbUserData.password) {

		if (!validPassword) {
			console.log("no valid");
			res
				.status(400)
				.json({ message: "Incorrect email or password. Please try again!" });
			return;
		}

		req.session.save(() => {
			req.session.loggedIn = true;
			req.session.user = dbUserData
			req.session.userId = dbUserData.id

			res
				.status(200)
				.json({ user: dbUserData, message: "You are now logged in!" });
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Logout
router.post("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
