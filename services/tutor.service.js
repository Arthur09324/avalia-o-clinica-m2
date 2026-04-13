const usuarios = [
  {
    id: 1,
    nome: 'Rafael Rodrigo',
    email: 'rafael@gmail.com',
  },
  {
    id: 2,
    nome: 'Leonardo Canto',
    email: 'Leocanto@gmail.com',
  },
  {
    id: 3,
    nome: 'Matheus Ramos',
    email: 'Burro@gmail.com',
  },
];


const listarTodosTutores = async () => {
  return usuarios;
};


const buscarTutorPorId = async (id) => {
  const usuario = usuarios.find((item) => item.id === Number(id));
  return usuario || null;
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
const id = usuarios.id;
usuarios[id] = usuarios;hund

return true;

}

module.exports = { listarTodosTutores, criarTutor, atualizarTutor };
