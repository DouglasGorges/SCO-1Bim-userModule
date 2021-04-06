const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const ComponentController = require('../controllers/ComponentController');
const PermissionController = require('../controllers/PermissionController');


//Autenticacao
router.post("/users/authenticate/", LoginController.authenticate);

// Usuarios
router.get("/list/users", UserController.get);
router.get("/list/user/:id", UserController.getById);
router.get("/list/user//:email", UserController.getByEmail);
router.get("/list/user///:document", UserController.getByDocument);
router.post("/create/user", UserController.store);
router.post("/create/user/update/:id", UserController.update);
router.get("/create/user/delete/:document", UserController.delete);

// Componentes
router.get("/list/components", ComponentController.get);
router.get("/list/component/:id", ComponentController.getById);
router.get("/list/component//:name", ComponentController.getByName);
router.get("/lista/component///:route", ComponentController.getByRoute);
router.post("/create/component", ComponentController.store);
router.post("/create/component/update/:id", ComponentController.update);
router.get("/create/component/delete/:id", ComponentController.delete);

// Permissoes
router.get("/list/permissions", PermissionController.get);
router.get("/list/permission/:user", PermissionController.getByUser);
router.get("/list/permission//:component", PermissionController.getByComponent);
router.post("/create/permission", PermissionController.store);
router.post("/create/permission/update/:id", PermissionController.update);
router.get("/create/permission/delete/:id", PermissionController.delete);

module.exports = router;