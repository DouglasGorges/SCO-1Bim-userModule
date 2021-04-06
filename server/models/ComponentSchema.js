const mongoose = require("mongoose");

const component = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "O campo Nome é obrigatório"]
    },

    route: {
        type: String,
        require: [true, "O campo Rota é obrigatório"]
    },
    
    createdAt: { type: Date, default: Date.now }

});

module.exports = component;