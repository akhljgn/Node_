const express = require('express');
const connection = require('./connect.js');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize the Express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));  // To parse form data
app.use(express.static(path.join(__dirname, 'public')));  // To serve static files (HTML)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Serve the registration form
});

app.post('/register', (req, res) => {
  // Extract user data from the request body
  const { name, age, phone, email } = req.body;

  // SQL query to insert the user data
  const insertQuery = 'INSERT INTO users (name, email, phone, age) VALUES (?, ?, ?, ?)';

  // Insert the data into the database
  connection.execute(insertQuery, [name, email, phone, age], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      res.status(500).send('Error registering user');
      return;
    }

    // Respond with a success message
    res.send(`<h1>Registration Successful!</h1>
              <p>Name: ${name}</p>
              <p>Age: ${age}</p>
              <p>Phone: ${phone}</p>
              <p>Email: ${email}</p>`);
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
