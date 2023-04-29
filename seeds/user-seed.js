const { User } = require("../models/");

const users = [
	{ email: "safia22@gmal.com", username: "Andrew1990", password: "password1" },
	{ email: "safia23@gmal.com", username: "Adam1988", password: "password2" },
	{ email: "safia224@gmal.com", username: "marianne1957", password: "password3" },
];

const seedUser = () =>
	User.bulkCreate(users, {
		individualHooks: true,
		returning: true,
	});

module.exports = seedUser;
