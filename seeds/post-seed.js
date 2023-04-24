const { Post } = require("../models");

const postData = [
	{
		title: "Lorem Ipsum I",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		userId: 1,
	},
	{
		title: "tyuyu",
		content:
			"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit.",
		userId: 2,
	},

	{
		title: "Lorem Ipsum III",
		content:
			"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		userId: 3,
	},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
