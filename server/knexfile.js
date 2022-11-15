/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 require("dotenv").config();
 const dbUser = process.env.dbUser
 const dbPassword = process.env.dbPassword

 module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: dbUser,
      password: dbPassword,
      database: "travel_app",
      charset: "utf8",
    },
  },
};