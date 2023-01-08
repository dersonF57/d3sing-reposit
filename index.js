const express = require('express');
const path= require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public/index.html')));

app.listen(3000, function() {
  console.log('O servidor está rodando na porta 3000');
});