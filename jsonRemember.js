//codigo para se lembrar de como usar JSON

let fs = require('fs');
const { json } = require('stream/consumers');

let arquivo = {archive:{}} /// criar um objeto


function addToArchive(item,tipo,id)
{
    if(!(id in arquivo))
        {
            arquivo.archive[id] = []
        }
    arquivo.archive[id].push(item,tipo);

}

function check()
{
    return arquivo;
}

function save()
{
    let jsonFile = JSON.stringify(arquivo,null,2);
    fs.writeFileSync('remember.json',jsonFile);
    console.log("saved");

}

addToArchive("knife","asa","22");
addToArchive("banana","sss","302");
addToArchive("LapTop","dd","588");

console.log(check());
save();

