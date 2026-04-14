const express = require('express');
const router = express.Router();
const tutoresController = require('../controllers/tutores.controller');
const tutorController = require('../controllers/tutor.controller');

router.get('/', tutoresController.listarTutores);
router.get('/:id', tutorController.buscarTutorPorId);
router.post('/', tutoresController.criarTutor);

module.exports = router;
