module.exports = (sequelize, Sequelize) => {
    const Gasto = sequelize.define("gastos", {
      Descripcion: {
        type: Sequelize.STRING
      },
      Tipo: {
        type: Sequelize.STRING
      }
    }
    , {
      timestamps: false
  }
    );
  
    return Gasto;
  };