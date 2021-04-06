const mongoose = require("mongoose");

const db = mongoose.connect("", {
    UseNewUrlParser: true,
    UseUnifiedTopology: true,
});


//mensagens de conecção
mongoose.connection.on("connected", () => {
    console.log("Conexão estabelecida com o DB");
});

mongoose.connection.on("disconnected", () => {
    console.log("Desconectado com o DB");
});

mongoose.connection.on("error", (error) => {
    console.log(`Algum erro aconteceu com o banco \n ${error}`);
});

module.exports = db;