'use strict'

const express = require('express');
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const cors = require("cors");
const app = express();
const port = 1234;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})