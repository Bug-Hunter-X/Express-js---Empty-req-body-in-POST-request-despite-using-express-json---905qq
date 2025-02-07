const express = require('express');
const app = express();
app.use(express.json()); // Ensure this is placed BEFORE the route handler
app.post('/data', (req, res) => {
  console.log(req.body); 
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));