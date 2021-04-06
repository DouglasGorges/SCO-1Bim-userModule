const permission = require("../models/PermissionSchema");

class PermissionController {

    async store(req, res) {
        try {
            let result = await permission.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async get(req, res) {
        let result = await permission.
        find().
        populate('user').
        populate('component');
        res.status(200).json(result);
    }

    async getByUser(req, res) {
        let result;

        result = await permission.
        find({ user: req.params.id }).
        populate('user').
        populate('component');

        res.status(200).json(result);
    }

    async getByComponent(req, res) {
        let result;

        result = await permission.
        find({ component: req.params.id }).
        populate('user').
        populate('component');

        res.status(200).json(result);
    }

    async update(req, res) {
        let result = await component.updateOne({ _id: req.body._id }, req.body);
        res.status(200).json(result);
    }

    async delete(req, res) {
        res.status(200).json(await component.findByIdAndDelete(
            req.params.id
        ));
    }

}
module.exports = new PermissionController();