const errorHandler = (err, req, res, next) => {

console.log(`ERRO: ${req.method} ${req.url}`, err.message);

const status = err.status || 500;

res.status(status).json({
erro: err.message ||  'Erro interno da clinica-M2',
caminho: req.url
})

}

module.exports = errorHandler

//lembrar de mexer no handler para resolver erro interno 