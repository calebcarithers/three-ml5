const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})
app.get('/ml5', (req, res) => {
    res.sendFile(path.join(__dirname, './ml5.html'));
})

app.use('/modules', express.static(__dirname + '/node_modules'));
app.use('/static', express.static(__dirname + '/static'));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})