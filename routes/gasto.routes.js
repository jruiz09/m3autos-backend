const { authJwt } = require("../middleware");
const controller = require("../controllers/gasto.controller.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "m3-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/gastos", [authJwt.verifyToken], controller.GetGastos);
  app.post("/api/gastos", [authJwt.verifyToken], controller.NuevoGasto);
  app.put("/api/gastos/:idGasto", [authJwt.verifyToken], controller.ActualizarGasto);
  app.delete("/api/gastos/:idGasto", [authJwt.verifyToken], controller.EliminarGasto);

 
};