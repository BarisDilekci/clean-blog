// app.js
const express = require('express');
const methodOverride = require('method-override');
const connectDB = require('./database/databaseController'); // Veritabanı bağlantısını içe aktar
const postRoutes = require('./routes/postRoutes');
const pageRoutes = require('./routes/pageRoutes');

const app = express();
const port = 3000;

// Veritabanına bağlan
connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.use('/', postRoutes);
app.use('/', pageRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
