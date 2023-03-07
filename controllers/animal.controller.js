import animalService from "../services/animal.service.js";

const animalController = {
  createAnimal: async function (req, res, next) {
    try {
      let animal = req.body;
      if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
        throw new Error(
          "Os campos nome, tipo e ID do proprietário são obrigatórios"
        );
      }
      animal = await animalService.createAnimalService(animal);
      res.send(animal);
      logger.info(`POST /animal - ${JSON.stringify(animal)}`);
    } catch (error) {
      next(error);
    }
  },
  updateAnimal: async function (req, res, next) {
    try {
      let animal = req.body;
      if (
        (!animal.animalId,
        !animal.nome || !animal.tipo || !animal.proprietarioId)
      ) {
        throw new Error(
          "Os campos ID de animal, nome, tipo e ID do proprietário são obrigatórios"
        );
      }
      animal = await animalService.updateAnimalService(animal);
      res.send(animal);
      logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
    } catch (error) {
      next(error);
    }
  },
  deleteAnimal: async function (req, res, next) {
    try {
      await animalService.deleteAnimalService(req.params.id);
      res.end();
      logger.info("DELETE /animal/:id");
    } catch (error) {
      next(error);
    }
  },
  getAnimals: async function (req, res, next){
    try{
        res.send(await animalService.getAnimalsService(req.query.proprietarioId));   
        logger.info("GET /animal");    
    } catch (error) {
        next(error);
    }
  },
  getAnimalById: async function (req, res, next){
    try{
        res.send(await animalService.getAnimalByIdService(req.params.id));
        logger.info("GET /animal/:id");    
    }catch (error) {
        next(error);
    }
  }
};

export default animalController;
