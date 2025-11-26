const express = require('express');
const bodyParser = require('body-parser');


const userRoutes = require('./rotes/users.js');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
});

