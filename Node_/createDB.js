const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',     
  password: '',     
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
  
  const dbName = 'NewDatabase';
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (err, results) => {
    if (err) {
      console.error('Error creating database: ' + err.stack);
    } else {
      console.log(`Database '${dbName}' created or already exists.`);
    }
    connection.end();
  });
});
