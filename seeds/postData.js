const { Post } = require('../models');

const postData = [
  {
    title: 'The Power of MVC in Web Development',
    content: 'The MVC framework is a game-changer in web development because it separates the application into three interconnected components: Model, View, and Controller. This separation allows for better organization, making the development process more efficient and the application easier to maintain and scale.',
    user_id: 1,
  },
  {
    title: 'The Importance of User Authentication in Web Applications',
    content: 'User authentication is crucial in web applications to ensure that only authorized users have access to certain features and data. Implementing robust authentication mechanisms helps protect user information, maintain data integrity, and enhance the overall security of the application.',
    user_id: 2,
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;