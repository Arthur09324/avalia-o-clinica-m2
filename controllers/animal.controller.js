const AnimalService = require('../services/animal.service');


const listarAnimais = async (req, res, next) => {
  try {
    const Animais = await AnimalService.listarTodosAnimais();
    res.status(200).json({ total: Animais.length, Animais });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar animais.' });
  }
};

const buscarAnimalPorId = async (req, res) => {
  try {
  
    const { id } = req.params;
    const Animal = await AnimalService.buscarAnimalPorId(id);

    if (!Animal) {
      return res
        .status(404)
        .json({ erro: `Animal ${id} não encontrado no sistema` });
    }

    res.status(200).json({Animal});
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar Animal.' });
  }
};

const criarAnimal = async (req, res) => {
  try {

    const { id, nome,especie, raca, data_nascimento, tutor_id } = req.body;
    const novoAnimal = await AnimalService.criarAnimal({ id, nome,especie, raca, data_nascimento, tutor_id });

    res.status(201).json({
      mensagem: 'animal cadastrado com sucesso!',
      animal: novoAnimal,
    });
  } catch (erro) {

    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarAnimais, buscarAnimalPorId, criarAnimal };
