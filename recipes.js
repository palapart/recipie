const express = require('express');
const app = express();
const port = 5000;

// Define the /recipes route
app.get('/recipes', (req, res) => {
  res.send('Recipe Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
