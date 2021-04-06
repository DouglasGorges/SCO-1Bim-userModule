const user = require("../models/UserSchema");

class UserController {

    async store(req, res) {
        try {
            let exists = await user.exists({
                document: req.body.document
            })
            if (!exists) {
                let result = await user.create(req.body);
                res.status(201).json(result);
            } else {
                throw { erro: "Usuário já cadastrado!" }
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }

    async get(req, res) {
        let result = await user.find({});
        res.status(200).json(result);

    }

    async getById(req, res) {
        let result = await user.findOne({ _id: req.params.id });
        res.status(200).json(result);
    }

    async getByEmail(req, res) {
        let result = await user.findOne({ document: req.params.email });
        res.status(200).json(result);
    }

    async getByDocument(req, res) {
        let result = await user.findOne({ document: req.params.document });
        res.status(200).json(result);
    }

    async update(req, res) {
        let result = await user.updateOne({ _id: req.params.id }, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        let result = await user.deleteOne({ document: req.params.document });
        res.status(200).json(result);
    }

    async deleteById(req, res) {
        let result = await user.deleteOne({ _id: req.params.id });
        res.status(200).json(result);
    }

}
module.exports = new UserController();