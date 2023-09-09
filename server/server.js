const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

// Define a route for handling the GET request on "/sei_req_reset"
app.get('/sei_req_reset', (req, res) => {
  // Execute the Bash script when a GET request is received on "/sei_req_reset"
  exec('../reset.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing the script: ${error}`);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Script executed successfully.');
      res.status(200).send('Script executed successfully.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
