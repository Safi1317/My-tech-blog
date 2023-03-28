const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  constraints: false,
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
  constraints: false,
});
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  constraints: false,
});
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  constraints: false,
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
});
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
  constraints: false,
});

module.exports = { User, Post, Comment };
