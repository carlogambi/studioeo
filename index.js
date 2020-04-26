const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.static(path.resolve(__dirname, 'libs')));
app.use(express.static(path.resolve(__dirname, 'public')));

http.listen(PORT, () => {
console.log('ready to listen on port ' + PORT);
});