const pool = require('../database/connection')

const listarTodosTutores = async () => {
  return tutores;
};


const buscarTutorPorId = async (id) => {
  const tutor = tutor.find((item) => item.id === Number(id));
  return tutor || null;
};


const criarTutor = async ({ nome, email }) => {
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }
  const novoTutor = {
    id: tutores.length + 1,
    nome,
    email,
  };
  usuarios.push(novoTutor);
  return novoTutor;
};

const atualizarTutor = async(tutor)=>{
const id = tutor.id;
  tutor[id] = tutor;

return true;

}

module.exports = { listarTodosTutores, criarTutor, atualizarTutor };
