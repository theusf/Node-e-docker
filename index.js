const express = require("express");
const path = require('path');

const app = express();
const img = path.resolve(__dirname, 'knuckles.jpg');


app.listen(3000, () => console.log('Servidor rodando!'));
app.get('/', (req, res) => res.sendFile(img)); 
