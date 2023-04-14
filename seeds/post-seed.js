const { Post } = require("../models");

const postData = [
  {
    title: "Lorem Ipsum I",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    user_id: 1,
  },
  {
    title: "tyuyu",
    content:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit.",
    user_id: 2,
  },

  {
    title: "Lorem Ipsum III",
    content:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
