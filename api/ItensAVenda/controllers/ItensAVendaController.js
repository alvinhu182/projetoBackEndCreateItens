const database = require("../../../dbConfig/db/models");
class ItemController {
  static async getAllItensAVenda(req, res) {
    try {
      const allItensAVenda = await database.Turmas.findAll();
      return res.status(200).send(allItensAVenda);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOneItensAVenda(req, res) {
    const { itensAVenda_id } = req.params;
    try {
      const oneItensAVenda = await database.Itens.findOne({
        where: {
          id: Number(itensAVenda_id)
        }
      });
      return res.status(200).send(oneItensAVenda);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createItensAVenda(req, res) {
    const newItensAVenda = req.body;
    try {
      const newCreatedItensAVenda = await database.Itens.create(newItensAVenda);
      return res.status(200).send(newCreatedItensAVenda);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async updateItensAVenda(req, res) {
    const { ItensAVenda_id } = req.params;
    const newItensAVendaInfo = req.body;
    try {
      await database.Itens.update(newItensAVendaInfo, {
        where: { id: Number(ItensAVenda_id) }
      });
      const upatedItensAVenda = await database.Itens.findOne({
        where: { id: Number(ItensAVenda_id) }
      });
      return res.status(200).send(upatedItensAVenda);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deleteItensAVenda(req, res) {
    const { ItensAVenda_id } = req.params;
    try {
      await database.Itens.destroy({
        where: {
          id: Number(ItensAVenda_id)
        }
      });
      return res
        .status(200)
        .send({ msg: `O item ID: ${ItensAVenda_id} foi deletado com sucesso!` });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = ItensController;
