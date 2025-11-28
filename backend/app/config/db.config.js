module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  PORT: process.env.DB_PORT || 27017,
  USER: process.env.DB_USER || "admin",
  PASSWORD: process.env.DB_PASSWORD || "admin123",
  DB: process.env.DB_NAME || "mean_crud_db"
};
