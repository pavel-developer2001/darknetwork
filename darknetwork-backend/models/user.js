const Sequelize = require('sequelize')
const sequelize = require('../db')
const Post = require('./post')

const User = sequelize.define('User', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// User.hasMany(Post, {foreignKey: 'id'})

module.exports = User