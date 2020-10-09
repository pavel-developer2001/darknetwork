const Sequelize = require('sequelize')
const sequelize = require('../db')


const Comment = sequelize.define('Comment', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  commentAuthor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  commentText: {
    type: Sequelize.STRING,
    allowNull: false
  },
  countComment: {
    type: Sequelize.STRING,
    allowNull: false
  },
  commentCountLike: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  postId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})


module.exports = Comment