const database = require("../../../dbConfig/db/models");

class PeopleController {
  static async getActivePeople(req, res) {
    try {
      const allTruePeople = await database.pessoas.findAll();
      return res.status(200).send(allTruePeople);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOne(req, res) {
    const { person_id } = req.params;
    try {
      const pessoas = await database.pessoas.findOne({
        where: {
          id: Number(person_id)
        }
      });

      if (!pessoas) {
        return res.status(404).send("Pessoa não existe, tente outro id");
      }

      return res.status(200).send(pessoas);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createPerson(req, res) {
    const { nome, email  } = req.body;
    try {
      const verifyingUser = await database.pessoas.findOne({
        where: {
          email: email
        }
      });

      if (verifyingUser) {
        return res.send("O usuário já está cadastrado", { verifyingUser });
      }
      const person = await database.pessoas.create({
        nome,
        email
      });
      return res
        .status(200)
        .send({ msg: "Pessoa cadastrada com sucesso!", ...person });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async editPessoa(req, res) {
    const { person_id } = req.params;
    const newpessoas = req.body;
    try {
      await database.pessoas.update(newpessoas, {
        where: {
          id: Number(person_id)
        }
      });

      const updatedPerson = await database.pessoas.findOne({
        where: {
          id: Number(person_id)
        }
      });
      return res
        .status(200)
        .send({ msg: "Pessoa atualizada com sucesso!", ...updatedPerson });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deletePerson(req, res) {
    const { person_id } = req.params;
    try {
      await database.pessoas.destroy({
        where: {
          id: Number(person_id)
        }
      });
      return res.status(200).send("Pessoa deletada com sucesso");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async restorePessoa(req, res) {
    const { pessoa_id } = req.params;
    try {
      await database.Pessoas.restore({
        where: {
          id: Number(pessoa_id)
        }
      });
      return res.status(200).send({ msg: "Pessoas restaurada com sucesso!" });
    } catch (error) {}
  }
}


module.exports = PeopleController