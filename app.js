const express = require('express');
const app = express();
// Azure App Service provides the port via environment variable
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><p>Deployment Successful.</p>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});