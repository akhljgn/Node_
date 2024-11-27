const connection = require('./connect.js');

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Query to show all databases
connection.query('SHOW DATABASES;', (err, results) => {
  if (err) {
    console.error('Error fetching databases:', err.stack);
  } else {
    console.log('Databases:', results);
  }

  // Close the connection
  connection.end();
});
