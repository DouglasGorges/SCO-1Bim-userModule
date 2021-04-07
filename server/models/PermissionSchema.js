const mongoose = require("mongoose");

const permission = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    component: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Component'
    },

    userCreate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    createdAt: { type: Date, default: Date.now },

    userInactivate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    inactivatedAt: { type: Date}

});

module.exports = permission;