const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.get('/noseDraw', (req, res) => {
    res.sendFile(path.join(__dirname, './noseDraw.html'));
})
app.get('/p5ML5', (req, res) => {
    res.sendFile(path.join(__dirname, './p5ML5.html'));
})

app.use('/modules', express.static(__dirname + '/node_modules'));
app.use('/static', express.static(__dirname + '/static'));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})