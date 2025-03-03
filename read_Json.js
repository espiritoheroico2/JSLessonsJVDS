const fs = require('fs');
//let arquivo json
//formato de texto padrao utf8
let jsondata = fs.readFileSync('Schooltext.json','utf8');


//usar JSON para tornar em objeto denovo
let data = JSON.parse(jsondata);

console.log("DADOS COMPLETOS",data);

//acessa partes especificas
console.log("alunos de grau 1", data.alunos["1"]);
console.log("dificuldade em matematica", data.materias["Matematica"]);

console.log("all data");
for (let serie in data.alunos)
    {
        console.log(`serie ${serie} : ${data.alunos[serie].join(",")}`);
    }

for (let serie in data.materias)
    {
        console.log(`materias ${serie} : ${data.materias[serie].join(",")}`);
    }