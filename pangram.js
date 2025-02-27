
//Um pangrama é uma frase que contém todas as letras do alfabeto pelo menos uma vez (ignorando maiúsculas/minúsculas, números e pontuação). Sua tarefa é criar uma função que verifica se uma string é um pangrama.

//Tarefa: Escreva uma função chamada isPangram que:

//Recebe uma string como argumento (ex.: "The quick brown fox jumps over the lazy dog").
//Retorna true se a string for um pangrama (contém todas as letras de 'a' a 'z'), e false caso contrário.
//Ignore letras maiúsculas (trate 'A' e 'a' como iguais), espaços, números e caracteres especiais.
//Casos de teste:

//isPangram("The quick brown fox jumps over the lazy dog") → true (contém todas as letras)
//isPangram("Hello, World!") → false (falta várias letras)
//isPangram("abcdefghijklmnopqrstuvwxyz") → true (exatamente o alfabeto)
//isPangram("") → false (string vazia)
//isPangram("The quick brown fox jumps over a lazy dog") → false (falta o 't' de "the")

let alphabet = "abcdefghijklmnopqrstuvwxyz";


function isPangram(sentence)
{
    if (sentence === '') {
        console.log(`faltam todas as letras`);
        return false;  
    }
    //o codigo aqui que deve retornar true or false
    let s = sentence.toLowerCase().replace(/[^a-z]/, '');
    let missingletters = [];

    for(let i = 0; i < alphabet.length; i++)
        {
            
            let letter = alphabet[i];
            if(s.indexOf(letter) === -1 )
                {
                    //console.log(`falta a letra ${alphabet[1]}`);
                    missingletters.push(alphabet[i]);
                    //return false
                }
        }
        
        if(missingletters.length > 0){
            console.log("faltam as letras " + missingletters.join(", "));
            return false;
        }
       
        console.log("possui todas as letras");
        return true

}

//testes

isPangram("The quick brown fox jumps over the lazy dog")// → true (contém todas as letras)
isPangram("Hello, World!")// → false (falta várias letras)
isPangram("abcdefghijklmnopqrstuvwxyz") //→ true (exatamente o alfabeto)
isPangram("") //→ false (string vazia)
isPangram("he quick brown fox jumps over a lazy dog") //→ false (falta o 't' de "the")