module.exports = {
  development: {
    username: "postgres",
    password: "123456",
    database: "wedding-invitation",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  },
};
