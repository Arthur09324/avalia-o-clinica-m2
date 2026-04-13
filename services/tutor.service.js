const pool = require('../database/connection')

const listarTodosTutores = async () => {
  return tutores;
};


const buscarTutorPorId = async (id) => {
  const tutor = tutores.find((item) => item.id === Number(id));
  return tutor || null;
};


const criarTutor = async ({ nome, email }) => {
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }
  const novoTutor = {
    id: usuarios.length + 1,
    nome,
    email,
  };
  usuarios.push(novoTutor);
  return novoTutor;
};

const atualizarTutor = async(tutor)=>{
const id = tutores.id;
tutores[id] = tutores;hund

return true;

}

module.exports = { listarTodosTutores, criarTutor, atualizarTutor };
