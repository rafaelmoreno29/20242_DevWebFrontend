const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.obterTodos);
router.get('/:ra', alunoController.obterPorRa);

module.exports = router;
