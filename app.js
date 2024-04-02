const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Replace "your_mongo_uri" with your actual MongoDB connection URI
const uri = "mongodb://localhost:27017/laysStore";
let db;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db('laysStore');
    })
    .catch(err => console.error(err));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // Parse JSON data from requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data from forms

// Set Handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/products', (req, res) => {
    res.render('products');
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

// firstName,
// lastName,
// email,
// contact,
// address,
// address2,
// country,
// state,
// zip,
// credit

app.post('/checkout', async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const contact = req.body.contact;
    const address = req.body.address;
    const address2 = req.body.address2;
    const country = req.body.country;
    const state = req.body.state;
    const zip = req.body.zip;
    const credit = req.body.credit;
    const quantities = req.body.quantities;
    const order = { firstName, lastName, email, contact, address, address2, country, state, zip, credit, quantities };

    try {
        const result = await db.collection('orders').insertOne(order);
        res.send('Order placed successfully!');
    } catch (err) {
        console.error(err);
        res.send('Error placing order');
    }
});

app.get('/success', (req, res) => {
    res.render('success');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
