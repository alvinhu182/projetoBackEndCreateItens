const pessoas = require("../api/Pessoas/routes");
const itensRegistrados = require("../api/itensRegistrados/routes");
const user = require("../api/Usuarios/routes");
const { createToken } = require("../api/Usuarios/services/auth.service");

module.exports = (app) => {
  app.use("/auth", createToken);

  app.use("/api", pessoas);
  app.use("/itensRegistrados", itensRegistrados);
  app.use("/user-api", user);
};

