require('dotenv').config({ path: '../.env' }); // Import dotenv to load environment variables
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5001;

// Middleware to handle CORS and JSON requests
app.use(cors());
app.use(express.json());

// MySQL database connection configuration using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the MySQL database
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL Database');
  }
});

// Your API routes go here...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
