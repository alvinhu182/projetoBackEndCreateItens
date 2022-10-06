const database = require("../../../dbConfig/db/models");
const validator = require("validator");

class User {
  static async createUser(req, res) {
    const { email, nome, senha } = req.body;
    const isEmail = email ? validator.isEmail(email) : false;
    const isSenha = senha
      ? validator.isStrongPassword(senha, [
          { minLength: 8 },
          { minUppercase: 1 },
          { minSymbols: 1 },
          { minNumbers: 1 },
          {}
        ])
      : false;

    if (!isEmail) {
      return res.status(400).send("Invalid credentials");
    }
    if (!isSenha) {
      return res.status(400).send("Invalid credentials");
    }

    try {
      const user = await database.AdminUsers.create({
        email,
        senha,
        nome
      });

      return res.status(200).send(user);
    } catch (error) {
      return error.message;
    }
  }
}
module.exports = User;
