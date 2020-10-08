// const mysql = require('mysql')

// const db = mysql.createPool({
//     host: "localhost",
//     user: 'root',
//     password: '',
//     database: 'DarkNetwok'
// })
// module.exports = db


const Sequelize = require('sequelize')

const sequelize = new Sequelize('DarkNetwork', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })
  
  module.exports = sequelize