import propService from "../services/prop.service.js";

const propController = {
  createProp: async function (req, res, next) {
    try {
      let prop = req.body;

      if (!prop.nome || !prop.telefone) {
        throw new Error("Os campos nome e telefone são obrigatórios");
      }

      prop = await propService.createPropService(prop);
      res.send(prop);
      logger.info(`POST /proprietario - ${JSON.stringify(prop)}`);
    } catch (error) {
      next(error);
    }
  },
  updateProp: async function (req, res, next) {
    try {
      let prop = req.body;

      if (!prop.proprietario_id || !prop.nome || !prop.telefone) {
        throw new Error("Os campos ID, nome e telefone são obrigatórios");
      }
      prop = await propService.updatePropService(prop);
      res.send(prop);
      logger.info(`PUT /proprietario/:id - ${JSON.stringify(prop)}`);
    } catch (error) {
      next(error);
    }
  },
  deleteProp: async function (req, res, next) {
    try {
      await propService.deletePropService(req.params.id);
      res.end();
      logger.info("DELETE /proprietario/:id");
    } catch (error) {
      next(error);
    }
  },
  getProps: async function (req, res, next) {
    try {
      res.send(await propService.getPropsService());
      logger.info("GET /proprietario");
    } catch (error) {
      next(error);
    }
  },
  getPropById: async function (req, res, next) {
    try{
      res.send(await propService.getPropByIdService(req.params.id));
      logger.info("GET /proprietario/:id");
    }catch (error) {
      next(error);
    }
  },
  
};

export default propController;
