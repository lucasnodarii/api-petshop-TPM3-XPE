import { connect } from "./db.js";

const animalRepository = {
  createAnimalRepository: async function (animal) {
    const conn = await connect();
    try {
      const sql =
        "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *";
      const values = [animal.nome, animal.tipo, animal.proprietario_id];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  updateAnimalRepository: async function (animal) {
    const conn = await connect();
    try {
      const sql =
        "UPDATE animais SET nome = $1, tipo = $2 WHERE animal_id = $3 RETURNING *";
      const values = [animal.nome, animal.tipo, animal.animal_id];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  deleteAnimalRepository: async function (id) {
    const conn = await connect();
    try {
      const sql = "DELETE FROM animais WHERE animal_id = $1";
      await conn.query(sql, [id]);
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getAnimalsRepository: async function () {
    const conn = await connect();
    try {
      const sql = "SELECT * FROM animais";
      const res = await conn.query(sql);
      return res.rows;
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getAnimalByIdRepository: async function (id) {
    const conn = await connect();
    try {
      const sql = "SELECT * FROM animais WHERE animal_id = $1";
      const res = await conn.query(sql, [id]);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getAnimalsByPropRepository: async function (proprietario_id) {
    const conn = await connect();
    try {
      const sql = "SELECT * FROM animais WHERE proprietario_id = $1";
      const res = await conn.query(sql,[proprietario_id]);
      return res.rows;
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
};

export default animalRepository;
