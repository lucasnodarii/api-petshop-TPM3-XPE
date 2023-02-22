import { connect } from "./db.js";

const propRepository = {
  createPropRepository: async function (prop) {
    const conn = await connect();
    try {
      const sql =
        "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *";
      const values = [prop.nome, prop.telefone];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  updatePropRepository: async function (prop) {
    const conn = await connect();
    try {
      const sql =
        "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *";
      const values = [prop.nome, prop.telefone, prop.proprietario_id];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  deletePropRepository: async function (id) {
    const conn = await connect();
    try {
      const sql = "DELETE FROM proprietarios WHERE proprietario_id = $1";
      await conn.query(sql, [id]);
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getPropsRepository: async function () {
    const conn = await connect();
    try {
      const res = await conn.query("SELECT * FROM proprietarios");
      return res.rows;
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getPropByIdRepository: async function (id) {
    const conn = await connect();
    try {
      const res = await conn.query(
        "SELECT * FROM proprietarios WHERE proprietario_id = $1",
        [id]
      );
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
};

export default propRepository;
