import animalRepository from "../repositories/animal.repository.js";

const animalService = {
  createAnimalService: async function (animal) {
    return await animalRepository.createAnimalRepository(animal);
  },
  updateAnimalService: async function (animal) {
    return await animalRepository.updateAnimalRepository(animal);
  },
  deleteAnimalService: async function (id) {
    await animalRepository.deleteAnimalRepository(id);
  },
  getAnimalsService: async function (proprietario_id){
    if(proprietario_id){
        return await animalRepository.getAnimalsByPropRepository(proprietario_id);      
    }
    return await animalRepository.getAnimalsRepository();
    
  },
  getAnimalByIdService: async function(id){
    return await animalRepository.getAnimalByIdRepository(id);
  }
};

export default animalService;
