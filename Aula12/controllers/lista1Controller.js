exports.ex1 = (req, res) => {
    const palavra = req.query.palavra;
    let vogais = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toLowerCase() === 'a' ||
            palavra[i].toLowerCase() === 'e' ||
            palavra[i].toLowerCase() === 'i' ||
            palavra[i].toLowerCase() === 'o' ||
            palavra[i].toLowerCase() === 'u') {
            vogais++;
        }
    }
    res.json({ qtdeVogais: vogais });
};
exports.ex2 = (req, res) => {
    res.json({ mensagem: 'ex2' });
};
exports.ex3 = (req, res) => {
    res.json({ mensagem: 'ex3' });
};
exports.ex4 = (req, res) => {
    res.json({ mensagem: 'ex4' });
};
exports.ex5 = (req, res) => {
    res.json({ mensagem: 'ex5' });
};
exports.ex6 = (req, res) => {
    res.json({ mensagem: 'ex6' });
};