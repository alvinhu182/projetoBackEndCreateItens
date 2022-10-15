const database = require("../../../dbConfig/db/models");

class PeopleController {
  //static significa que é um método estático: não precisa criar uma nova instância da classe através do "new"
  static async getActivePeople(req, res) {
    try {
      const allTruePeople = await database.pessoas.findAll();
      return res.status(200).send(allTruePeople);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getAllFalse(req, res) {
    try {
      const allFalsePeople = await database.pessoas.scope("allFalse").findAll();
      return res.status(200).send(allFalsePeople);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  static async getPeople(req, res) {
    try {
      const allFalsePeople = await database.pessoas.findAll({
        paranoid: false
      });
      return res.status(200).send(allFalsePeople);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOne(req, res) {
    const { pessoa_id } = req.params;
    try {
      const pessoas = await database.pessoas.findOne({
        where: {
          id: Number(pessoas_id)
        }
      });

      if (!pessoas) {
        return res.status(404).send("A pessoa que você buscou não existe, tente novamente com outro ID");
      }

      return res.status(200).send(pessoas);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createPerson(req, res) {
    const { nome, email, ativo } = req.body;
    try {
      const verifyingUser = await database.pessoas.findOne({
        where: {
          email: email
        }
      });

      if (verifyingUser) {
        return res.send("O vendedor já está cadastrado", { verifyingUser });
      }
      const pessoas = await database.pessoas.create({
        nome,
        email,
        ativo,
      });
      return res
        .status(200)
        .send({ msg: "Vendedor cadastrado com sucesso!", ...pessoas });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async editPessoas(req, res) {
    const { vendedor_id } = req.params;
    const newPessoas = req.body;
    try {
      await database.pessoas.update(newPessoas, {
        where: {
          id: Number(vendedor_id)
        }
      });

      const updatedpessoas = await database.pessoas.findOne({
        where: {
          id: Number(vendedor_id)
        }
      });
      return res
        .status(200)
        .send({ msg: "Vendedor atualizado com sucesso!", ...updatedPessoas });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deleteItem(req, res) {
    const { item_id } = req.params;
    try {
      await database.item.destroy({
        where: {
          id: Number(item_id)
        }
      });
      return res.status(200).send("Vendedor deletado com sucesso");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async restorepessoas(req, res) {
    const { vendedor_id } = req.params;
    try {
      await database.pessoas.restore({
        where: {
          id: Number(vendedor_id)
        }
      });
      return res.status(200).send({ msg: "Vendedor restaurado com sucesso!" });
    } catch (error) {}
  }

  static async disableVendedor(req, res) {
    const { vendedor_id } = req.params;

    try {
      database.sequelize.transaction(async (trans) => {
        await database.pessoas.update(
          { ativo: false },
          { where: { id: Number(vendedor_id) } },
          { transaction: trans }
        );
        await database.itensRegistrados.update(
          { status: "Fora de estoque" },
          {
            where: {
              vendedor_id: Number(vendedor_id)
            }
          },
          { transaction: trans }
        );
        return res.status(200).send({
          message: `item registrado referente ao vendedor do id :  ${vendedor_id} se encontra fora de estoque`
        });
      });
    } catch (error) {}
  }

  static async getitensRegistradosByClass(req, res) {
    const { venda_id } = req.params;
    try {
      const itensRegistrados = await database.itensRegistrados.findAndCountAll({
        where: {
          item_id: Number(venda_id),
          status: "Vendido"
        }
      });
      return res.status(200).send(itensRegistrados);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getitensRegistradosPorPessoa(req, res) {
    const { vendedor_id } = req.params;
    try {
      const vendedor = await database.pessoas.findOne({
        where: {
          id: Number(vendedor_id)
        }
      });

      const itensRegistrados = await vendedor.getitensRegistradosConfirmados();
      if (!vendedor) {
        return res.status(203).send({ msgError: "Vendedor não encontrado!" });
      }
      return res.status(200).send(itensRegistrados);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOneItemRegistradoPorPessoa(req, res) {
    const { itensRegistrados_id, vendedor_id } = req.params;
    try {
      const oneitensRegistrados = await database.itemRegistrado.findOne({
        where: {
          id: Number(itensRegistrados_id),
          vendedor_id: Number(vendedor_id)
        }
      });
      if (!oneitensRegistrados) {
        return res.status(203).send({ msgError: "Item não encontrado!" });
      }
      return res.status(200).send(oneitensRegistrados);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createitensRegistrados(req, res) {
    const { vendedor_id } = req.params;
    const newitensRegistrados = { ...req.body, vendedor_id: Number(vendedor_id) };
    try {
      const verifyingVendedor = await database.itensRegistrados.findOne({
        where: {
          vendedor_id: Number(vendedor_id)
        }
      });
      if (!verifyingVendedor) {
        return res.status(400).send({ msgError: "item já registrado!" });
      }
      const createditensRegistrados = await database.itensRegistrados.create(newitensRegistrados);
      return res
        .status(200)
        .send({ msgSuccess: "item registrado com sucesso!", ...createditensRegistrados });
    } catch (error) {}
  }

  static async editItemRegistrado(req, res) {
    const { vendedor_id, itensRegistrados_id } = req.params;
    const newitensRegistradosInfo = req.body;
    try {
      await database.itensRegistrados.update(newitensRegistradosInfo, {
        where: {
          id: Number(itensRegistrados_id),
          vendedor_id: Number(vendedor_id)
        }
      });

      const updateditensRegistrados = await database.itensRegistrados.findOne({
        where: {
          id: Number(itensRegistrados_Id)
        }
      });
      return res.status(200).send(updateditensRegistrados_Id);
    } catch (error) {
      return res
        .status(500)
        .send({ msg: "Erro ao atualizar o vendedor!", error: error.message });
    }
  }

  static async deleteitensRegistrados(req, res) {
    const { itensRegistrados_id } = req.params;
    try {
      await database.itensRegistrados.destroy({
        where: {
          id: Number(itensRegistrados_id)
        }
      });
      return res.status(200).send({ msg: "Deletado com sucesso!" });
    } catch (error) {
      return res
        .status(500)
        .send({ msg: "Erro ao deletar o item!", error: error.message });
    }
  }
}

module.exports = PeopleController;
