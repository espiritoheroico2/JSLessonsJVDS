`'Enunciado: Leap
O objetivo é criar uma função que determine se um ano é bissexto ou não, seguindo as regras do calendário gregoriano:

Um ano é bissexto se for divisível por 4.
Porém, se for divisível por 100, não é bissexto, a menos que também seja divisível por 400.
Tarefa: Escreva uma função chamada isLeap que:

Recebe um número inteiro representando o ano (ex.: 2020).
Retorna true se o ano for bissexto, e false caso contrário.
Casos de teste:

isLeap(2020) → true (divisível por 4, não por 100).   
isLeap(2100) → false (divisível por 100, mas não por 400).
isLeap(2000) → true (divisível por 400).
isLeap(2019) → false (não divisível por 4).`

console.log("init");

//year % 4  === 0 && year % 100 && year %400 

function isLeap(year) {
    // 1. Verifique se o ano é divisível por 4
    // Dica: Use o operador % para checar divisibilidade (resto zero)

    if (year % 4 === 0) {             // Primeiro, divisível por 4
        if (year % 100 === 0) {       // Se divisível por 100...
            return year % 400 === 0;  // ...só é bissexto se divisível por 400
        }
        return true;                  // Se não for divisível por 100, é bissexto
    }
    return false;

}

//alternative version of the code
function AltIsLeap(year) {return (year % 4 ===0 ) && (year % 100 !== 0 || year %400 ===0)}


// Testes
console.log(isLeap(2020)); // Deve ser true
console.log(isLeap(2100)); // Deve ser false
console.log(isLeap(2000)); // Deve ser true
console.log(isLeap(2019)); // Deve ser false