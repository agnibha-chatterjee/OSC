const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
