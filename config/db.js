const Sequelize = require("sequelize");
require("dotenv").config({ path: ".env" });
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "d6rii63wp64rsfb5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    define: {
      timestamps: 0,
    },

    charset: "utf8mb4",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = db;
