
const router = require('express').Router();
const animalController = require('../controllers/animal.controller');

router.get('/', animalController.listarAnimais);
// router.get('/:id', tutorController.buscarAnimalPorId);
// router.post('/', tutoresController.criarAnimal);

module.exports = router;
