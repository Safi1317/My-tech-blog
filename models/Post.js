const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},

		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlphanumeric: true,
			},
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "user",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "post",
	}
);

module.exports = Post;

// const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Post extends Model {}

// Post.init(
// 	{
// 		title: DataTypes.STRING,
// 		content: DataTypes.STRING,
// 	},
// 	{
// 		sequelize,
// 	}
// );

// module.exports = Post;
