const mongoose = require('mongoose');

// definindo o model
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    climate: {
        type: String,
        required: true,
    },
    terrain: {
        type: String,
        required: true,
    },
    films: {
        type: String,
    }
});

//collection
mongoose.model('Product', ProductSchema);
