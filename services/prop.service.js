import propRepository from "../repositories/prop.repository.js";
import animalRepository from "../repositories/animal.repository.js";

const propService = {
  createPropService: async function (prop) {
    return await propRepository.createPropRepository(prop);
  },
  updatePropService: async function (prop) {
    return await propRepository.updatePropRepository(prop);
  },
  deletePropService: async function (id) {
    const animal = await animalRepository.getAnimalsByPropRepository(id);
    if(animal.length != 0){
      throw new Error("Não é possível excluir esse proprietário");
    }
    await propRepository.deletePropRepository(id);
  },
  getPropsService: async function () {
    return await propRepository.getPropsRepository();
  },
  getPropByIdService: async function (id){
    return await propRepository.getPropByIdRepository(id);
  }
};

export default propService;
