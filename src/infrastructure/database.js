const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@cluster0.fptrxzj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    placa: {
        type: String,
        unique: true,
    },
    marca: String,
    modelo: String,
    cor: String,
});

const CarModel = mongoose.model('CarModel', CarSchema);

module.exports = {
    CarModel,
};