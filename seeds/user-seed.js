const { User } = require("../models");

const userData = [
  { email: "safia22@gmail.com", username: "Safia", password: "safia1234" },
  { email: "aliya22@gmail.com", username: "Aliya", password: "aliya1234" },
  { email: "riley22@gmail.com", username: "Riley", password: "riley1234" },
  { email: "sam22@gmail.com", username: "Momo", password: "Sam1234" },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
