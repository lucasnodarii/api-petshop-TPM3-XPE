import Servico from "../models/servico.model.js";
import Animal from "../models/animal.model.js";
import Prop from "../models/prop.model.js";

const servicoRepository = {
  createServicoRepository: async function (servico) {
    try {
      return await Servico.create(servico);
    } catch (error) {
      throw error;
    }
  },
  getServicosRepository: async function () {
    try {
      return await Servico.findAll({
        include: [
          {
            model: Animal,
            include: [Prop],
          },
        ],        
      });
    } catch (error) {
      throw error;
    }
  },
  getServicosByPropIdRepository: async function (proprietarioId) {
    try {
      return await Servico.findAll({
        include: [
          {
            model: Animal,
            include: [Prop],
            where: { proprietarioId },
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  },
};

export default servicoRepository;
