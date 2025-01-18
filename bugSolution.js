const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    // Simulate an error
    // const result = someFunctionThatMightThrowAnError();
    //res.send(result);
    res.send('Hello from Express!');
  } catch (error) {
    console.error('Error in request handler:', error);
    res.status(500).send('Something went wrong!');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});