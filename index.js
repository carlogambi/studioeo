const express = require('express');
const bodyParser = require('body-parser');
const engines = require('consolidate');

const PORT = process.env.PORT || 3000;

const app = express();

const router = require('./routes/router');

app.use(bodyParser.urlencoded({ extended: false }))
.use(express.static(`${__dirname}/public`))
.set('views', `${__dirname}/Views`)
.engine('html', engines.mustache)
.set('view engine', 'html')
.use('/', router)
.listen(PORT, () => console.log('listen on port: ' + PORT));
