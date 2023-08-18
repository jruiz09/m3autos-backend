module.exports = (sequelize, Sequelize) => {
    const Vehiculo = sequelize.define("vehiculos", {
      Image: {
        type: Sequelize.STRING
    },
      TipoVehiculo: {type: Sequelize.STRING},
      Modelo: {type: Sequelize.STRING},
      Año: {type: Sequelize.INTEGER},
      Patente: {type: Sequelize.STRING},
    Km: {type: Sequelize.INTEGER},
      TipoValor: {type: Sequelize.STRING},
      PrecioDolar: {type: Sequelize.DECIMAL},  
      PrecioPeso: {type: Sequelize.DECIMAL}, 
      ValorDolar: {type: Sequelize.DECIMAL},     

    }
    , {
      timestamps: false
  }
    );
  
    return Vehiculo;
  };