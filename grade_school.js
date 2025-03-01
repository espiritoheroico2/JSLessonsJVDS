//Tarefa: Escreva um programa que:
//Permita adicionar um aluno com nome e série.
//Retorne uma lista organizada por série (ex.: todos os alunos da série 1, depois série 2, etc.).
//Salve essa lista em um arquivo JSON.
//Requisitos:

//Use um objeto para armazenar os alunos, onde cada chave é uma série (1 a 8) e o valor é um array de nomes.
//A função add adiciona um aluno a uma série.
//A função roster retorna o objeto com todos os alunos organizados.
//A função saveToFile salva o roster em um arquivo school.json.

const fs = require('fs');

let school = 
{
    alunos:{},
    materias:{}
};// 

function add(nome, serie)
{
 //add o aluno
    if(!(serie in school))
    {
        school.alunos[serie] = []; //cria um array se a serie nao existir
    }
    school.alunos[serie].push(nome);//adiciona um aluno no array da serie
}   


function addMaterias(mat,grau)
{
    if(!(grau in school))
        {
            school.materias[grau] =[]
        }
    school.materias[grau].push(mat);

}

function checarLista()
{
    //retornar a lista
    return school;

}

function saveToFile()
{
    //salvar o school.json aqui

    let JsonTextoSchool = JSON.stringify(school,null,2);
    fs.writeFileSync('Schooltext.json',JsonTextoSchool);
    console.log("arquivo salvo com sucesso");
}

add("Alice", 2);
add("Bob", 1);
add("Charlie", 2);

addMaterias("Biologia", "médio");
console.log(checarLista()); // { '1': ['Bob'], '2': ['Alice', 'Charlie'] }
saveToFile();

