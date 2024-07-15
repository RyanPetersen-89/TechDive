const { User } = require('../models');

const userData = [
  {
    username: "DatabaseDoggo",
    email: "bark@dev.com",
    password: "Woof1234",
  },
  {
    username: "CodeCrackerTheChimpChamp",
    email: "swing@code.com",
    password: "Banana567",
  },
  {
    username: "ScriptingSparrow",
    email: "chirp@script.com",
    password: "Flight890",
  },
  {
    username: "DevDolphin-da-God",
    email: "splash@data.com",
    password: "OceanWave234",
  },
  {
    username: "LogicallyLackingLion",
    email: "roar@logic.com",
    password: "Savannah567",
  },
  {
    username: "PixelatedPanda",
    email: "bamboo@pixel.com",
    password: "ZenGarden890",
  },
];


const seedUsers = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers;