require("dotenv").config({ path: ".env" });
const db = require("../config/db");

exports.showData = async (req, res, next) => {
  const { day = "", hotel = 1, hour = "", category = 2 } = req.params;
  try {
    const data = await db.query(
      `
      SELECT centrosconsumo.id, centrosconsumo.nombre, centrosconsumo.concepto_en, centrosconsumo.concepto_es, centrosconsumoh.dia,  centrosconsumoh.hora_inicio, centrosconsumoh.hora_final, 
      centrosconsumo.logo, img_portada
      FROM centros_consumo AS centrosconsumo
      INNER JOIN centros_consumo_horarios AS centrosconsumoh
      ON centrosconsumo.id = centrosconsumoh.centro_consumo_id
      INNER JOIN centros_consumo_detalles as centrosconsumod 
      ON centrosconsumo.id = centrosconsumod.centro_consumo_id 
      WHERE centrosconsumo.categoria_id = ${category} AND centrosconsumod.hotel_id = ${hotel} AND centrosconsumoh.dia = ${day}
      AND centrosconsumoh.hora_inicio < "${hour}" AND centrosconsumoh.hora_final > "${hour}";
      
      `
    );
    res.json(data[0]);
  } catch (error) {
    console.log(error);
    next();
  }
};
