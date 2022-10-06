const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const PORT = process.env.PORT || 3003;
app.use(express.json());
app.use(cors());
routes(app);
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));