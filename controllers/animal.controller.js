const AnimalService = require('../services/animal.service');


const listarAnimais = async (req, res, next) => {
  try {
    const Animais = await AnimaisService.listarTodosAnimais();
    res.status(200).json({ total: Animais.length, Animais });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar livros.' });
  }
};

const buscarAnimalPorId = async (req, res) => {
  try {
  
    const { id } = req.params;
    const Animal = await animalService.buscarAnimalPorId(id);

    if (!Animal) {
      return res
        .status(404)
        .json({ erro: `Animal ${id} não encontrado no acervo.` });
    }

    res.status(200).json({ animal });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar Animal.' });
  }
};

const criarAnimal = async (req, res) => {
  try {

    const { nome, raça } = req.body;
    const novoAnimal = await AnimalService.criarAnimal({ nome, raça, data_nascimento });

    res.status(201).json({
      mensagem: 'animal cadastrado no acervo com sucesso!',
      animal: novoAnimal,
    });
  } catch (erro) {

    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarAnimais, buscarAnimalPorId, criarAnimal };
