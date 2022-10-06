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
router.get("/person/:id", PeopleController.getOne);
//Pega um vendedor e um item listado especifico através dos IDs
router.get(
  "/person/:vendedor_id/itemlistado/:itemlistado_id",
  PeopleController.getOneItemlistadoByPerson
);
//Pega itens listados de um vendedor
router.get(
  "/person/:vendedor_id/itemlistado",
  PeopleController.getItemlistadoByPerson
);
//Pega todas as matriculas de uma turma
router.get("/itemlistado/:vendedor_id", PeopleController.getItemlistadoByVendedor);

// ------------ POST -------------
//Cadastra uma pessoa
router.post("/Pessoas", PeopleController.createPerson);
//Cadastra um ItemListado em um vendedor através do ID do vendedor (params) e o ID do item listado com status (body)
router.post(
  "/Pessoas/:vendedor_id/itemlistado",
  PeopleController.createitemlistado
);
//Recupera uma pessoa que já foi deletada
router.post("/Pessoas/:pessoas_id/restore", PeopleController.restorePeople);
//Desativa todas os itens registrados de um vendedor (cancela o vendedor)
router.post("/Pessoas/disabled/:vendedor_id", PeopleController.disableVendedor);

// ------------ PUT -------------
//Edita um item listado pelo ID (params)
router.put("/Pessoas/:id", PeopleController.editPerson);
//Edita item listado de um vendedor, IDs pelos paramms e novas infos pelo body
router.put(
  "/Pessoas/:vendedor_id/itemlistado/:itemlistado_id",
  PeopleController.editItemlistado
);

// ------------ DELETE -------------
//Deleta uma pessoa pelo ID (params)
router.delete("/Pessoas/:id", PeopleController.deletePerson);

module.exports = router;
