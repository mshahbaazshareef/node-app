const express = require('express');
const app = express()
const port = 5000;

app.get('/', (req, res) => res.send('Welcome!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))