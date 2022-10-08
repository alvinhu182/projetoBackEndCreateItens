const { Router } = require("express");
const {
  authMidVendedor,
} = require("../Usuarios/services/auth.service");
const router = Router();
const PeopleController = require("./controllers/PeopleController");



//Pega todos as pessoas que estão o ativo === true
router.get("/active-people", PeopleController.getActivePeople);
//Pega todos independete do valor do atributo "ativo"
router.get("/Pessoas", PeopleController.getPeople);
//Pega uma pessoa pelo id
router.get("/Pessoas/:id", PeopleController.getOne);
//Pega um vendedor e um item registrado especifico através dos IDs
router.get(
  "/Pessoas/:vendedor_id/itensRegistrados/:itensRegistrados_Id",
  PeopleController.getOneItemRegistradoPorPessoa
);
//Pega itens registrados de um vendedor
router.get(
  "/Pessoas/:vendedor_id/itensRegistrados_Id",
  PeopleController.getitensRegistradosPorPessoa
);
//Pega todas as matriculas de uma turma
router.get("/itensRegistrados/:vendedor_id", PeopleController.getitensRegistradosPorPessoa);

// ------------ POST -------------
//Cadastra uma pessoa
router.post("/Pessoas", PeopleController.createPerson);
//Cadastra um item registrado em um vendedor através do ID do vendedor (params) e o ID do item registrado com status (body)
router.post(
  "/Pessoas/:vendedor_id/itensRegistrados",
  PeopleController.createitensRegistrados
);
//Recupera uma pessoa que já foi deletada
router.post("/Pessoas/:vendedor_id/restore", PeopleController.restorePessoas);
//Desativa todas os itens registrados de um vendedor (cancela o vendedor)
router.post("/Pessoas/disabled/:vendedor_id", PeopleController.disableVendedor);

// ------------ PUT -------------
//Edita um item registrado pelo ID (params)
router.put("/vendedor_id/:id", PeopleController.editPessoas);
//Edita item registrado de um vendedor, IDs pelos paramms e novas infos pelo body
router.put(
  "/Pessoas/:vendedor_id/itensRegistrados/:itensRegistrados_id",
  PeopleController.editItemRegistrado
);

// ------------ DELETE -------------
//Deleta uma pessoa pelo ID (params)
router.delete("/Item/:id", PeopleController.deleteItem);

module.exports = router;
