const mongoose = require('mongoose');

// Corrected MongoDB URI
mongoose.connect('mongodb://localhost:27017/MongoBD', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conexion exitosa a MongoDB'))
    .catch(err => console.error('Error de conexion a MongoDB:', err));