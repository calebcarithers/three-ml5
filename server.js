const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.get('/noseDraw', (req, res) => {
    res.sendFile(path.join(__dirname, './play/noseDraw.html'));
})
app.get('/p5ML5', (req, res) => {
    res.sendFile(path.join(__dirname, './play/p5ML5.html'));
})
app.get('/eyeFollower', (req, res) => {
    res.sendFile(path.join(__dirname, './play/eyeFollower.html'));
})
app.get('/highFive', (req, res) => {
    res.sendFile(path.join(__dirname, './play/highFive.html'));
})
app.get('/8thwall', (req, res) => {
    res.sendFile(path.join(__dirname, './play/8thwall-ml5.html'));
})
app.get('/controlRig', (req, res) => {
    res.sendFile(path.join(__dirname, './controlRig.html'));
})
app.get('/p5', (req, res) => {
    res.sendFile(path.join(__dirname, './play/p5fun.html'));
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, './play/test.html'));
})

app.get('/newtest', (req, res) => {
    res.sendFile(path.join(__dirname, './play/newtest.html'));
})


app.use('/modules', express.static(__dirname + '/node_modules'));
app.use('/static', express.static(__dirname + '/static'));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})