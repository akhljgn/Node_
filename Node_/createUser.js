const connection = require('./connect.js')
const readline = require('readline');


// Create a readline interface to take input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Ask user for details
  rl.question('Enter name: ', (name) => {
    rl.question('Enter age: ', (age) => {
      rl.question('Enter phone: ', (phone) => {
        rl.question('Enter email: ', (email) => {
          // SQL query to insert the user data
          const insertQuery = 'INSERT INTO users (name, age, phone, email) VALUES (?, ?, ?, ?)';
  
          // Insert the user data into the database
          connection.execute(insertQuery, [name, age, phone, email], (err, results) => {
            if (err) {
              console.error('Error inserting data:', err.stack);
            } else {
                console.log('\nUser details entered:');
                console.log('Name:', name);
                console.log('Age:', age);
                console.log('Phone:', phone);
                console.log('Email:', email);
                console.log('\nUser successfully inserted into the database.\n');
            }
  
            // Close the readline interface and MySQL connection
            rl.close();
            connection.end();
          });
        });
      });
    });
  });