module.exports = {
    HOST: "localhost",
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.PASSWORD || "rootroot",
    DB: "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };