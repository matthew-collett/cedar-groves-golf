/* server.js */

/* imports */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

/* config */
const port = 3000;

/* app */
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.listen(port, () => {});

/* main page */
app.get('/', async function (req, res) {

    var body = {
        'hero_title': 'Cedar Groves Executive<br>Par 3 & Driving Range',
        'hero_subtitle': 'Golf Course & Country Club',
        'hero_img': 'assets/images/drone-1.png'
    }
    // render the page 
    res.render(__dirname + '/views/index', body);
});