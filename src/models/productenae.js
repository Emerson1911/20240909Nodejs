const mongoose = require('mongoose');

const productenaeSchema = new mongoose.Schema({
    nombreENAE: { type: String, required: true },
    descripcionENAE: { type: String, required: true },
    precioENAE: { type: Number, required: true }  // Already defined as Number
});

module.exports = mongoose.model('Product', productenaeSchema); // Model name capitalized
