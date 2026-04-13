
const router = require('express').Router();
const livroController = require('../controllers/livro.controller');

router.get('/', livroController.listarLivros);
router.get('/:id', livroController.buscarLivroPorId);
router.post('/', livroController.criarLivro);

module.exports = router;
