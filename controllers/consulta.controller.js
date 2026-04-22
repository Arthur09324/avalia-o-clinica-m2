const ConsultaService = require('../services/Consulta.service');


const listarConsulta = async (req, res, next) => {
  try {
    const Consulta = await ConsultaService.listarTodasConsulta();
    res.status(200).json({ total: Consulta.length, Consulta });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar Consulta.' });
  }
};

const buscarConsultaPorId = async (req, res) => {
  try {
  
    const { id } = req.params;
    const Consulta = await ConsultaService.buscarConsultaPorId(id);

    if (!Consulta) {
      return res
        .status(404)
        .json({ erro: `Consulta ${id} não encontrado no sistema` });
    }

    res.status(200).json({Consulta});
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar Consulta.' });
  }
};

const criarConsulta = async (req, res) => {
  try {

    const { nome, raça } = req.body;
    const novoConsulta = await ConsultaService.criarConsulta({ nome, raça, data_nascimento });

    res.status(201).json({
      mensagem: 'Consulta cadastrado com sucesso!',
      Consulta: novoConsulta,
    });
  } catch (erro) {

    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarConsulta, buscarConsultaPorId, criarConsulta };
