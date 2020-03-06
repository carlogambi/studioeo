const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');

const PORT = process.env.PORT || 3000;

const app = express();

const router = require('./routes/router');
console.log(__dirname);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/Views`);
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use('/', router);

app.listen(PORT, () => console.log('listen on port: ' + PORT));
