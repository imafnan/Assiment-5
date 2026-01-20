const express = require('express');
const path = require('path');
const app = express();
const contactRoute = require('./routes/contact.route')
const cors = require('cors')


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.send('Express Server is Working!');
});

app.use('/api/contact', contactRoute)

module.exports = app;
