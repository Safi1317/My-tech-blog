const user = require('./user');
const Post= require('./post');
const comment = require('./comment');

user.hasMany(Post, {
  foreignKey: 'user_id',
});
Post.hasMany(comment, {
    foreignKey: 'post_id',
  });
user.hasMany(comment, {
    foreignKey: 'user_id',
  });
Post.belongsTo(user, {
  foreignKey: 'user_id',
});
comment.belongsTo(user, {
    foreignKey: 'user_id',
  });
  comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });

module.exports = { user, Post, comment };