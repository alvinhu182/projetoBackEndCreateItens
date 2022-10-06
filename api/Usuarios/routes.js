const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { authMidVendedor } = require("./services/auth.service");
const userController = require("./controllers/userController");
const router = Router();

router.use(authMidVendedor);

// ------------ POST -------------
//Cadastra um user
router.post("/Usuarios", userController.createUser);

module.exports = router;
