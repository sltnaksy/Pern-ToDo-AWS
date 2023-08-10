
const { Client } = require("pg");

const pool = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Use this option if you encounter self-signed certificates issue (only for development/testing)
  },
});

pool
  .connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

pool.query(
  `CREATE TABLE IF NOT EXISTS todo (
      todo_id SERIAL PRIMARY KEY,
      description VARCHAR(255)
    )`,
  (error, results) => {
    if (error) {
      console.error("Error creating table:", error);
    } else {
      console.log("Table todo created successfully");
    }
  }
);
module.exports = pool;
