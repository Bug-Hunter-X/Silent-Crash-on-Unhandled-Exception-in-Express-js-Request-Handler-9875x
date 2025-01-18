const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Problem: The server might crash silently if there is an unhandled exception in a request handler.
//Scenario: If there is an error in the request handler for the '/' route that is not caught with a try...catch block, the server might crash without any meaningful error message in the console.  The process will likely exit, requiring manual restart.
