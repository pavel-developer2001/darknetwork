const Sequelize = require('sequelize')

const sequelize = new Sequelize('DarkNetwork', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
