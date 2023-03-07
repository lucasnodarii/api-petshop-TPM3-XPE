import Animal from "../models/animal.model.js";

const animalRepository = {
  createAnimalRepository: async function (animal) {
    try {
      return await Animal.create(animal);
    } catch (error) {
      throw error;
    }
  },
  updateAnimalRepository: async function (animal) {
    try {
      await Animal.update(animal, {
        where: {
          animalId: animal.animalId,
        },
      });
      return await animalRepository.getAnimalByIdRepository(animal.animalId);
    } catch (error) {
      throw error;
    }
  },
  deleteAnimalRepository: async function (id) {
    try {
      await Animal.destroy({ where: { animalId: id } });
    } catch (error) {
      throw error;
    }
  },
  getAnimalsRepository: async function () {
    try {
      return await Animal.findAll();
    } catch (error) {
      throw error;
    }
  },
  getAnimalByIdRepository: async function (id) {
    try {
      return await Animal.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
  getAnimalsByPropRepository: async function (proprietarioId) {
    try {
      return await Animal.findAll({
        where: {
          proprietarioId
        },
      });
    } catch (error) {
      throw error;
    }
  },
};

export default animalRepository;
