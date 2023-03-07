import servicoRepository from "../repositories/servico.repository.js";

const servicoService = {
  createServicoService: async function (servico) {
    return await servicoRepository.createServicoRepository(servico);
  },
  getServicosService: async function (proprietarioId) {
    if (proprietarioId) {
      return await servicoRepository.getServicosByPropIdRepository(
        proprietarioId
      );
    }
    return await servicoRepository.getServicosRepository();
  },
};

export default servicoService;
