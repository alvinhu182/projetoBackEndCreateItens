const { Router } = require("express");

const {
  authMidVendedor,
} = require("../Usuarios/services/auth.service");
const router = Router();
const PeopleController = require("./Controllers/PeopleController");
//get//
router.get("/pessoas", PeopleController.getActivePeople);
router.get("/pessoas/:person_id", PeopleController.getOne);
//post//
router.post("/pessoas", PeopleController.createPerson);
//put//
router.put("/pessoas/:person_id",PeopleController.editPessoa);
//delete//
router.delete("/pessoas/:person_id", PeopleController.deletePerson)


module.exports = router;