const { Router } = require("express");
const {
  authMidVendedor,
  //authMidComprador//
} = require("../Usuarios/services/auth.service");
const itensRegistradosController = require("./controllers/itensRegistradosController");
const router = Router();

// router.use();
// ------------ GET -------------
//Pega todos os itens
router.get("/itens", authMidVendedor, itensRegistradosController.getAllitensRegistrados);
//Pega o item pelo ID
router.get("/itens/:venda_id", itensRegistradosController.getOneitensRegistrados);

// ------------ POST -------------
//Cadastra um item
router.post("/itens", authMidVendedor, itensRegistradosController.createitensRegistrados);

// ------------ PUT -------------
//Edita um item
router.put("/itens/:venda_id", itensRegistradosController.updateitensRegistrados);

// ------------ DELETE -------------
//Deleta uma item
router.delete("/itens/:venda_id", itensRegistradosController.deleteitensRegistrados);

module.exports = router;

