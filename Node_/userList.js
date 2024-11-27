const connection = require('./connect.js');

const selectQuery = 'SELECT * FROM users';

// Execute the query to get all users
connection.query(selectQuery, (err, results) => {
  if (err) {
    console.error('Error retrieving users:', err.stack);
  } else {
    // Check if there are users in the table
    if (results.length > 0) {
      console.log('\nList of all users:');
      // Loop through each user and display their details
      results.forEach((user) => {
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Age: ${user.age}`);
        console.log(`Phone: ${user.phone}`);
        console.log(`Email: ${user.email}`);
        console.log('----------------------------');
      });
    } else {
      console.log('No users found in the database.');
    }
  }

  // Close the MySQL connection
  connection.end();
});