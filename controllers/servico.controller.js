import servicoService from "../services/servico.service.js";

const servicoController = {
  createServico: async function (req, res, next) {
    try {
      let servico = req.body;

      if (!servico.descricao || !servico.valor || !servico.animalId) {
        throw new Error("Descrição, valor e animalId são obrigatórios");
      }

      servico = await servicoService.createServicoService(servico);
      res.send(servico);
      logger.info(`POST /servico - ${JSON.stringify(servico)}`);
    } catch (error) {
      next(error);
    }
  },
  getServicos: async function (req, res, next) {
    try {
      res.send(await servicoService.getServicosService(req.query.proprietarioId));
      logger.info("GET /servico");
    } catch (error) {
      next(error);
    }
  },
  getServicosByPropId: async function (req, res, next) {
    try {
      res.send(await servicoService.getServicosByPropIdService(req.params.id));
      logger.info("GET /servico/:id");
    } catch (error) {
      next(error);
    }
  },
};

export default servicoController;