// foodAdd.js

const pool = require('../../conexion');

const addFood = async (food) => {
  const {
    nombre,
    calorias,
    proteinas,
    grasas,
    carbohidratos,
    medida_nombre,
    cantidad
  } = food;

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // Insertar el nuevo alimento en la tabla alimentos
    const [result] = await connection.query(
      `INSERT INTO alimentos (nombre, calorias, proteinas, grasas, carbohidratos) VALUES (?, ?, ?, ?, ?)`,
      [nombre, calorias, proteinas, grasas, carbohidratos]
    );

    // Obtener el ID del alimento recién insertado
    const alimento_id = result.insertId;

    // Insertar la medida del alimento en la tabla medidas_alimento
    await connection.query(
      `INSERT INTO medidas_alimento (alimento_id, medida_nombre, cantidad) VALUES (?, ?, ?)`,
      [alimento_id, medida_nombre, cantidad]
    );

    await connection.commit();

    return { status: 'success' };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = addFood;
