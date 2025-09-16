// db.js
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost", // ou 127.0.0.1
  user: "root",      // seu usuário do MySQL
  password: "",      // sua senha do MySQL
  database: "nightmare_db"
});

module.exports = pool;
