const db = require("../models")
const gastos = db.gasto
const Op = db.Sequelize.Op

exports.GetGastos = async (req,res)=>{
    gastos.findAll({
        order: [
            ['id', 'DESC']
        ]
    })
    .then(data=> {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio un error"
        })
    })
}


exports.NuevoGasto = async (req,res)=> {
    const body = req.body
    try {
        await gastos.create(body)
        .then(data => {
            res.send({
                message: "Gasto creado",
                data: data,
            });

           }

        )
       
    } catch (error) {
        res.json({message:error.message})
    }
}

exports.ActualizarGasto = async (req, res) => {
    const body = req.body;
    const idGasto = req.params.idGasto;
    console.log("Bofy", body)
    console.log("idDelgasto ==> ", idGasto)
    try{
        await gastos.update(body, {
            where: { id: idGasto }})
        .then(data => {
            res.send({
                message: "Gasto Actualizado",
                data: data,
            });
        }
        )
    }
    catch (error) {
        res.json({message:error.message})
    }
}
    


exports.EliminarGasto = async(req, res) => {
    const id = req.params.idGasto;
    try{
        await gastos.destroy({
            where: {id : id }
        })
        .then(data => {
            res.send({
                message: "Gasto Eliminado",
                data: data,
            });
        }
        )
    }
    catch (error) {
        res.json({message:error.message})
    }
}