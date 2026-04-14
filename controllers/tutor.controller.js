const tutorService = require('../services/tutor.service');

const listarTutores = async (req, res) => {
  try {
    const tutores = await tutorService.listarTodosTutores();
    res.status(200).json({ total: tutores.length, tutores });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar tutores.' });
  }
};

const buscarTutorPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const tutor = await tutorService.buscarTutorPorId(id);

    if (!tutor) {
      return res.status(404).json({ erro: `Tutor ${id} não encontrado.` });
    }

    res.status(200).json({ tutor });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar tutor.' });
  }
};

const criarTutor = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoTutor = await tutorService.criarTutor({ nome, email });

    
    res.status(201).json({
      mensagem: 'consulta cadastrada com sucesso!',
      usuario: novoTutor,
    });
  } catch (erro) {
    
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarTutores, buscarTutorPorId, criarTutor };
