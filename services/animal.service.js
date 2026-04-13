
const pool = require('../database/connection')

const listarTodosAnimais = async () => {
  try{
const resultado = await pool.query('SELECT * FROM animal ORDER BY id');
return resultado.rows;
}
  catch(error){
console.log('Erro ao listar animais', error.message)
throw error;
  }
  };


const buscarAnimalPorId = async (id) => {
  const animal = await pool.query('SELECT * FROM animais WHERE id = $1')
  return resultado.rows[0];
};


const criarAnimal = async ({ nome, raca,  especie, data_nascimento, tutor_id }) => {
 try{
const query = `INSERT INTO Animais (nome, raca,  data_retiro, data_consulta, consulta_id)VALUES($1, $2, $3, $4)`
const res = await pool.query(
[nome,
raca,
especie,
data_nascimento,
tutor_id])
return res.rows[0]; 
}catch(error){}
};

module.exports = { listarTodosAnimais, buscarAnimalPorId, criarAnimal };
