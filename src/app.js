const express = require('express');
const app = express();

const prodRouter = require('./routes/products');
const cartRouter = require('./routes/carts');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', prodRouter);
app.use('/api/carts', cartRouter);

const server = app.listen(8080, () => console.log('Server running on port 8080'));
server.on('error', error => console.log(error));