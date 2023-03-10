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

app.get('/', async function (req, res) {

    var body = {
        'hero_title': 'Cedar Groves Executive<br>Par 3 & Driving Range',
        'hero_subtitle': 'Golf Course & Country Club',
        'hero_img': 'assets/images/drone-1.png'
    }
    // render the page 
    res.render(__dirname + '/views/index', body);
});

app.get('/faq', async function (req, res) {

    var body = {
        'hero_title': 'Frequently Asked Questions',
        'hero_subtitle': 'More Information',
        'hero_img': 'assets/images/drone-14.png'
    }
    // render the page 
    res.render(__dirname + '/views/faq', body);
});

app.get('/contact', async function (req, res) {

    var body = {
        'hero_title': 'Contact Us',
        'hero_subtitle': 'We\'d Love to Hear From You Directly',
        'hero_img': 'assets/images/drone-12.png'
    }
    // render the page 
    res.render(__dirname + '/views/contact', body);
});