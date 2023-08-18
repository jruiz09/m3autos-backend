const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const dotenv = require("dotenv")


dotenv.config()

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//static Images Folder

app.use('/Images', express.static('./Images'))


// database
const db = require("./models");
const Role = db.role;

// SINCRONIZA TABLAS CON MODELOS
db.sequelize.sync();


// simple route
app.get("/", (req, res) => {
  res.json({ message: "API M3Autos" });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/gasto.routes')(app);
require('./routes/vehiculo.routes')(app);
require('./routes/upload.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
}