const db = require("../models");
const vehiculos = db.vehiculo;
const Op = db.Sequelize.Op;
const multer = require("multer");
const path = require("path");
const { read } = require("fs");

const GetVehiculos = async (req, res) => {
  vehiculos
    .findAll({
      order: [["id", "DESC"]],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocurrio un error",
      });
    });
};

const NuevoVehiculo = async (req, res) => {
  /*   console.log(req.body.filename)
    var imgsrc = 'http://127.0.0.1:8081/images/' + req.body.filename*/

    console.log(req.file.filename);

  let info = {
    Image: req.file.filename,
    TipoVehiculo: req.body.TipoVehiculo,
    Modelo: req.body.Modelo,
    Año: req.body.Año,
    Patente: req.body.Patente,
    Km: req.body.Km,
    TipoValor: req.body.TipoValor,
    PrecioDolar: req.body.PrecioDolar,
    PrecioPeso: req.body.PrecioPeso,
    ValorDolar: req.body.ValorDolar,
  };

  try {
    console.log("IMAGE ", req.file.path);
    await vehiculos.create(info).then((data) => {
      res.send({
        message: "Vehiculo Ingresado",
        data: data,
      });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// 8. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "C:/Devs/01-M3Autos/m3autos-frontend/src/assets");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "m3autos" + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("Image");

module.exports = {
  GetVehiculos,
  NuevoVehiculo,
  upload,
};
