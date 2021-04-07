const mongoose = require("mongoose");
const permissionSchema = require("./PermissionSchema.js");

const user = new mongoose.Schema({
    firstName: {
        type: String,
        require: [true, "O campo Primeiro Nome é obrigatório"]
    },

    lastName: {
        type: String,
        require: [true, "O campo Último Nome é obrigatório"]
    },

    document: {
        type: String,
        require: [true, "O campo Cpf é obrigatório"]
    },

    email: {
        type: String,
        require: [true, "O campo E-Mail é obrigatório"]
    },

    password: {
        type: String,
        require: [true, "O campo Senha é obrigatório"]
    },

    idActive: {
        type: Boolean,
        require: [true]
    },

    token: {
        type: String
    },

    createdAt: { type: Date, default: Date.now },

    permissions: [permissionSchema]
});

module.exports = mongoose.model('User', user);