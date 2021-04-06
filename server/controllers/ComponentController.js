const component = require("../models/ComponentSchema");

class ComponentController {

    async store(req, res) {
        try {
            let exists = await component.exists({
                route: req.body.route
            })
            if (!exists) {
                let result = await component.create(req.body);
                res.status(201).json(result);
            } else {
                throw { erro: "Componente dessa rota já cadastrado!" }
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }

    async get(req, res) {
        let result = await component.find({});
        res.status(200).json(result);
    }

    async getById(req, res) {
        let result = await component.find({ _id: req.params.id }).exec();
        res.status(200).json(result);
    }

    async getByName(req, res) {
        let result = await component.find({ name: req.params.name }).exec();
        res.status(200).json(result);
    }

    async getByRoute(req, res) {
        let result = await component.findOne({ route: req.params.route });
        res.status(200).json(result);
    }

    async update(req, res) {
        let result = await component.updateOne({ _id: req.params.id }, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        let result = await component.deleteOne({ _id: req.params.id });
        res.status(200).json(result);
    }

}
module.exports = new ComponentController();