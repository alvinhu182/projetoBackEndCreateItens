const Pessoas = require("../api/Pessoas/routes");
const ItensAVenda = require("../api/ItensAVenda/routes");
const user = require("../api/Usuarios/routes");
const { createToken } = require("../api/Usuarios/services/auth.service");

module.exports = (app) => {
  app.use("/auth", createToken);

  app.use("/api", Pessoas);
  app.use("/venda", ItensAVenda);
  app.use("/user-api", user);
};

