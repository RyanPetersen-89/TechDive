const { Comment } = require('../models');

const commentData = [
  {
    content: "This blog actually works!",
    post_id: 1,
    user_id: 2,
  },
  {
    content: "This commenter is stressed out!",
    post_id: 1,
    user_id: 4,
  },
  {
    content: "This is awesome!",
    post_id: 2,
    user_id: 5,
  },
];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;