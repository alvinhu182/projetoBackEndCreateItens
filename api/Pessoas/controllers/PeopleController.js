const database = require("../../../dbConfig/db/models");

class PeopleController {
  //static significa que é um método estático: não precisa criar uma nova instância da classe através do "new"
  static async getActivePeople(req, res) {
    try {
      const allTruePeople = await database.Pessoas.findAll();
      return res.status(200).send(allTruePeople);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getAllFalse(req, res) {
    try {
      const allFalsePeople = await database.Pessoas.scope("allFalse").findAll();
      return res.status(200).send(allFalsePeople);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  static async getPeople(req, res) {
    try {
      const allFalsePeople = await database.Pessoas.findAll({
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
      const pessoas = await database.Pessoas.findOne({
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
    const { person_id } = req.params;
    const newPessoas = req.body;
    try {
      await database.pessoas.update(newPessoas, {
        where: {
          id: Number(pessoas_id)
        }
      });

      const updatedPessoas = await database.pessoas.findOne({
        where: {
          id: Number(pessoas_id)
        }
      });
      return res
        .status(200)
        .send({ msg: "Vendedor atualizado com sucesso!", ...updatedPessoas });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deletePessoas(req, res) {
    const { pessoas_id } = req.params;
    try {
      await database.Pessoas.destroy({
        where: {
          id: Number(pessoas_id)
        }
      });
      return res.status(200).send("Vendedor deletado com sucesso");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async restorePessoas(req, res) {
    const { pessoas_id } = req.params;
    try {
      await database.pessoas.restore({
        where: {
          id: Number(pessoas_id)
        }
      });
      return res.status(200).send({ msg: "Vendedor restaurado com sucesso!" });
    } catch (error) {}
  }

  static async disableVendedor(req, res) {
    const { vendedor_id } = req.params;

    try {
      database.sequelize.transaction(async (trans) => {
        await database.Pessoas.update(
          { ativo: false },
          { where: { id: Number(vendedor_id) } },
          { transaction: trans }
        );
        await database.itemListado.update(
          { status: "Fora de estoque" },
          {
            where: {
              vendedor_id: Number(vendedor_id)
            }
          },
          { transaction: trans }
        );
        return res.status(200).send({
          message: `item listado referente ao vendedor do id :  ${vendedor_id} se encontra fora de estoque`
        });
      });
    } catch (error) {}
  }

  static async getItemListadoByClass(req, res) {
    const { venda_id } = req.params;
    try {
      const itemListado = await database.itemListado.findAndCountAll({
        where: {
          item_id: Number(venda_id),
          status: "Vendido"
        }
      });
      return res.status(200).send(itemListado);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getItemListadoByPerson(req, res) {
    const { vendedor_id } = req.params;
    try {
      const vendedor = await database.Pessoas.findOne({
        where: {
          id: Number(vendedor_id)
        }
      });

      const itemListado = await vendedor.getitemListadoConfirmados();
      if (!vendedor) {
        return res.status(203).send({ msgError: "Vendedor não encontrado!" });
      }
      return res.status(200).send(itemListado);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOneItemListadoByPerson(req, res) {
    const { itemListado_id, vendedor_id } = req.params;
    try {
      const oneItemListado = await database.ItemListado.findOne({
        where: {
          id: Number(itemListado_id),
          vendedor_id: Number(vendedor_id)
        }
      });
      if (!oneItemListado) {
        return res.status(203).send({ msgError: "Item não encontrado!" });
      }
      return res.status(200).send(oneItemListado);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createItemListado(req, res) {
    const { vendedor_id } = req.params;
    const newitemListado = { ...req.body, vendedor_id: Number(vendedor_id) };
    try {
      const verifyingVendedor = await database.ItemListado.findOne({
        where: {
          vendedor_id: Number(vendedor_id)
        }
      });
      if (!verifyingVendedor) {
        return res.status(400).send({ msgError: "item já listado!" });
      }
      const createdItemListado = await database.itemListado.create(newitemListado);
      return res
        .status(200)
        .send({ msgSuccess: "item listado com sucesso!", ...createditemListado });
    } catch (error) {}
  }

  static async editItemListado(req, res) {
    const { vendedor_id, itemListado_id } = req.params;
    const newItemListadoInfo = req.body;
    try {
      await database.itemListado.update(newItemListadoInfo, {
        where: {
          id: Number(itemListado_id),
          vendedor_id: Number(vendedor_id)
        }
      });

      const updatedItemListado = await database.itemListado.findOne({
        where: {
          id: Number(itemListado_id)
        }
      });
      return res.status(200).send(updatedItemListado);
    } catch (error) {
      return res
        .status(500)
        .send({ msg: "Erro ao atualizar o vendedor!", error: error.message });
    }
  }

  static async deleteitemListado(req, res) {
    const { itemListado_id } = req.params;
    try {
      await database.itemListado.destroy({
        where: {
          id: Number(itemListado_id)
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
