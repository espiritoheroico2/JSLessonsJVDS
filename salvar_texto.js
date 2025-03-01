//file system
const fs = require('fs');

let dados = 
{
    mensagem:"olá, este é meu primeiro arquivo JSON",
    dado2:"joao vitor dias",
    id:"4545"
};

let JsonTexto = JSON.stringify(dados,null,2);

fs.writeFileSync('texto.json',JsonTexto);

console.log("arquivo salvo com sucesso");