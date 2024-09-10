const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./src/routes/productRouter');
const database = require('./src/config/database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());  // Corrected bodyParser

app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);  // Use backticks for dynamic strings
});
