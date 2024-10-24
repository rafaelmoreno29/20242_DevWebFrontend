const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.obterTodos);
router.post('/', usuarioController.inserir);

module.exports = router;
