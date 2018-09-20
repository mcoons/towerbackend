module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/towerscores"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
};