import { connect } from "../../conexion";

// Controlador para agregar un nuevo alimento
export const addFood = async (req, res) => {
    const {
        nombre,
        calorias,
        proteinas,
        grasas,
        carbohidratos,
        medida_nombre,
        cantidad
    } = req.body;

    const connection = await connect(); // Ajusta según tu función de conexión

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

        res.status(200).json({ status: 'success', message: 'Alimento agregado correctamente' });
    } catch (error) {
        await connection.rollback();
        console.error('Error al agregar alimento:', error);
        res.status(500).json({ error: 'Error al agregar alimento' });
    } finally {
        await connection.end(); // Cambiado de connection.release() a connection.end()
    }
};
