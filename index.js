const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const mailinglistManager = require('./mailinglist/mailmanager')
const cors = require('cors')

const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.static(path.resolve(__dirname, 'libs')));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

let exhibWinContent;
app.post('/exhibPageMobile', (req, res) => {
    exhibWinContent = req.body.arg; 
    res.json({done: true});   
});

app.post('/addMail', (req, res) => {
    const {email} = req.body;
    mailinglistManager({req, res, email})

});

app.get('/exhibition', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'exhibPageMobile.html'));
});

app.get('/exhibContent', (req, res) => {
    res.json(exhibWinContent);   
});




http.listen(PORT, () => {
console.log('ready to listen on port ' + PORT);
});