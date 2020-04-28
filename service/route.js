
const express = require('express');

const app = express();
app.get('/about', function (req, res) {
        res.send(About)
});
app.get('/information', function (req, res) {
    res.send(Information);
    console.log('ok')
});

app.listen(3000, () => {
    console.log('Go to http://localhost:3000/ so you can see the data.');
});