const Sequelize = require('sequelize')
const sequelize = require('../db')

const Post = sequelize.define('Post', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  postAuthor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  postText: {
    type: Sequelize.STRING,
    allowNull: false
  },
  countLike: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  countComments: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Post