const express = require('express');
const bodyParser = require('body-parser');
const monk = require('monk');
const engines = require('consolidate');

const app = express();

const router = require('./routes/router');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/Views`);
app.engine('html', engines.mustache);
app.set('view engine', 'html');



app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
