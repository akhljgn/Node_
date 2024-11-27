const connection = require('./connect.js');

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// SQL query to create the users table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL
  );
`;

// Execute the query to create the table
connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error('Error creating table:', err.stack);
  } else {
    console.log('Users table created or already exists.');
  }

  // Close the connection
  connection.end();
});
