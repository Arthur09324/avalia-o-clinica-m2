const express = require('express');
const router = express.Router();

const livroRoute = require('./animal.route');
const usuarioRoute = require('./usuario.route');

const { autenticar, validarContentType } = require('../middlewares/main.middleware');


router.get('/', (req, res) => {
  res.json({ sistema: 'Biblioteca Ralph & Teddy', status: 'Online' });
});


router.use(autenticar);
router.use(validarContentType);

// 3. Rotas Protegidas
router.use('/livros', livroRoute);
router.use('/usuarios', usuarioRoute);


router.use((req, res) => {
  res
    .status(404)
    .json({ erro: 'Rota não encontrada na Biblioteca Ralph & Teddy.' });
});

module.exports = router;
