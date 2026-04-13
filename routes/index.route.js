const express = require('express');
const router = express.Router();

const animalRoute = require('./animal.route');
const tutorRoute = require('./usuario.route');

// const { autenticar, validarContentType } = require('../middlewares/main.middleware');


router.get('/', (req, res) => {
  res.json({ sistema: 'Biblioteca Ralph & Teddy', status: 'Online' });
});


// router.use(autenticar);
// router.use(validarContentType);

router.use('/animais', animalRoute);
router.use('/tutor', tutorRoute);


router.use((req, res) => {
  res
    .status(404)
    .json({ erro: 'Rota não encontrada na clinica-M2.' });
});

module.exports = router;
