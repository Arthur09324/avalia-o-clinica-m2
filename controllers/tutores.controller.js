const usuariosService = require('../services/tutores.service');


const listarTutores = async (req, res) => {
  try {
    const tutores = await tutoresService.listarTodosTutores();
    res.status(200).json({ total: tutores.length, tutores });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar tutores.' });
  }
};


const criarTutor = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoTutor = await tutoresService.criarTutor({ nome, email });


    res.status(201).json({
      mensagem: 'Tutor cadastrado com sucesso!',
      usuario: novoTutor,
    });
  } catch (erro) {

    res.status(400).json({ erro: erro.message });
  }
};

const atualizarTutores = async (req, res)=>{

const {id, nome, email} = req.body;
const tutores = await tutoresService.listarTodosTutores()

let tutor = tutor[id];
tutor.nome = nome;
tutor.email = email;

const success = await usuariosService.atualizarTutor(tutor)
if (success){

res.status(201).json({success: true});
}

else{

res.status(502).json({success: false});
}

}

module.exports = { listarTutores, criarTutor, atualizarTutor };
