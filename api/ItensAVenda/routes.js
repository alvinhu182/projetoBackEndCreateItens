const { Router } = require("express");
const {
  authMidVendedor,
  //authMidComprador//
} = require("../Users/services/auth.service");
const ItensAVendaController = require("./controllers/ItensAVendaController");
const router = Router();

// router.use();
// ------------ GET -------------
//Pega todos os itens
router.get("/itens", authMidVendedor, ItensAVendaController.getAllItensAVenda);
//Pega o item pelo ID
router.get("/itens/:venda_id", ItensAVendaController.getOneClass);

// ------------ POST -------------
//Cadastra um item
router.post("/itens", authMidVendedor, ItensAVendaController.createItensAVenda);

// ------------ PUT -------------
//Edita um item
router.put("/itens/:venda_id", ItensAVendaController.updateItensAVenda);

// ------------ DELETE -------------
//Deleta uma item
router.delete("/itens/:venda_id", ItensAVendaController.deleteItensAVenda);

module.exports = router;

