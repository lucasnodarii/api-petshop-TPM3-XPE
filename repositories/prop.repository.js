import Prop from "../models/prop.model.js";

const propRepository = {
  createPropRepository: async function (prop) {
    try {
      return await Prop.create(prop);
    } catch (error) {
      throw error;
    }
  },
  updatePropRepository: async function (prop) {
    try {
      await Prop.update(prop, {
        where: {
          proprietarioId: prop.proprietarioId,
        },
      });
      return await propRepository.getPropByIdRepository(prop.proprietarioId)
    } catch (error) {
      throw error;
    }
  },
  deletePropRepository: async function (id) {
    try {
      await Prop.destroy({ where: { proprietarioId: id } });
    } catch (error) {
      throw error;
    }
  },
  getPropsRepository: async function () {
    try {
      return await Prop.findAll();
    } catch (error) {
      throw error;
    }
  },
  getPropByIdRepository: async function (id) {
    try {
      return await Prop.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
};

export default propRepository;
