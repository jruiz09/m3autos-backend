const { authJwt } = require("../middleware");
const controller = require("../controllers/vehiculo.controller");
const multer = require('multer');
const upload = multer();

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "m3-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/vehiculo", [authJwt.verifyToken], controller.GetVehiculos);
  app.post("/api/vehiculo", controller.upload, controller.NuevoVehiculo);
 
};