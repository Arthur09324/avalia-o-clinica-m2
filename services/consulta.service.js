
const pool = require('../database/connection')

const listarTodosConsultas = async () => {
  try{
const resultado = await pool.query('SELECT * FROM Consulta ORDER BY id');
return resultado.rows;
}
  catch(error){
console.log('Erro ao listar Consultas', error.message)
throw error;
  }
  };


const buscarConsultaPorId = async (id) => {
  const Consulta = await pool.query('SELECT * FROM Consultas WHERE id = $1')
  return resultado.rows[0];
};


const criarConsulta = async ({ nome, medico,  data_retiro, data_consulta, consulta_id }) => {
 try{
const query = `INSERT INTO Consultas (nome, medico,  data_retiro, data_consulta, consulta_id)VALUES($1, $2, $3, $4)`
const res = await pool.query(
[nome,
medico,
data_retiro,
data_consulta,
consulta_id])
return res.rows[0]; 
}catch(error){}
};

module.exports = { listarTodosConsultas, buscarConsultaPorId, criarConsulta, };
