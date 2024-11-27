const alunoModel = require('../models/aluno');

// Lógica para obter todos os alunos
exports.obterTodos = async (req, res) => {
    try {
        const usuarios = await alunoModel.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.remover = async (req, res) => {
    try {
        const aluno = await alunoModel.findOne({ _id: req.params.id });
        if (aluno) {
            await alunoModel.deleteOne({ _id: req.params.id });
            res.status(200).json({ message: 'Aluno removido com sucesso' });
        } else {
            res.status(400).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
exports.editar = async (req, res) => {
    try {
        const aluno = await alunoModel.findOne({ _id: req.params.id });
        if (aluno) {
            await alunoModel.updateOne({ _id: req.params.id }, req.body);
            res.status(200).json(req.body);
        } else {
            res.status(400).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.obterPorId = async (req, res) => {
    try {
        const aluno = await alunoModel.findOne({ _id: req.params.id });
        if (aluno) {
            res.status(200).json(aluno);
        } else {
            res.status(400).json({ message: 'Aluno não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.obterPorRa = async (req, res) => {
    try {
        const aluno = await alunoModel.findOne({ ra: req.params.ra });
        if (aluno) {
            res.status(200).json(aluno);
        } else {
            res.status(400).json({ message: 'Aluno não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}
exports.obterDisciplinasPorRa = async (req, res) => {
    try {
        const aluno = await alunoModel.findOne({ ra: req.params.ra });
        if (aluno) {
            res.status(200).json(aluno.disciplinas);
        } else {
            res.status(400).json({ message: 'Aluno não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.inserir = async (req, res) => {
    try {
        await alunoModel.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json({ error: error });
    }

};
