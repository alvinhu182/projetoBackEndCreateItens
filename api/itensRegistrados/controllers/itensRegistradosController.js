const database = require("../../../dbConfig/db/models");
class ItemController {
  static async getAllitensRegistrados(req, res) {
    try {
      const allitensRegistrados = await database.itensRegistrados.findAll();
      return res.status(200).send(allitensRegistrados);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOneitensRegistrados(req, res) {
    
    const { itensRegistrados_id } = req.params;
    try {
      const oneitensRegistrados = await database.itensRegistrados.findOne({
        where: {
          id: Number(itensRegistrados_id)
        }
       
      });
      if(!itensRegistrados_id){
        return res.status(404).send("item não existe, tente outro id");
      }
      return res.status(200).send(oneitensRegistrados);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }


  static async createitensRegistrados(req, res) {
    const newitensRegistrados = req.body;
    try {
      const newCreateditensRegistrados = await database.itensRegistrados.create(newitensRegistrados);
      return res.status(200).send(newCreateditensRegistrados);
    } catch (error) {
      return res.status(500).send(error.message);
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
      return res
        .status(200)
        .send({ msg: `O item ID: ${itensRegistrados_id} foi deletado com sucesso!` });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = ItemController;
