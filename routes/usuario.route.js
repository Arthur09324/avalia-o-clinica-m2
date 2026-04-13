const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutor.controller');

router.get('/', tutorController.listarTutores);
router.get('/:id', tutoresController.buscarTutoresPorId);
router.post('/', tutorController.criarTutor);

module.exports = router;
