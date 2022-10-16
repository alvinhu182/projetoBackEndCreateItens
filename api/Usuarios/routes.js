const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { authMidVendedor } = require("./services/auth.service");
const userController = require("./controllers/userController");
const PeopleController = require("../Pessoas/controllers/PeopleController");
const router = Router();

router.use(authMidVendedor);
router.get("/pessoa/:id", PeopleController.getOne);
// ------------ POST -------------
//Cadastra um user
router.post("/Usuarios", userController.createUser);

module.exports = router;
