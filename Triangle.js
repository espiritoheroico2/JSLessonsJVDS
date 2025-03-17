// Forma 1: Triângulo crescente com asteriscos
function trianguloAsteriscos(linhas) {
    for(let i = 1; i <= linhas; i++) {
        let espacos = ' '.repeat(linhas - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacos + asteriscos);
    }
}

// Forma 2: Triângulo decrescente com números
function trianguloNumeros(linhas) {
    for(let i = linhas; i >= 1; i--) {
        let espacos = ' '.repeat(linhas - i);
        let numeros = '';
        for(let j = 1; j <= i; j++) {
            numeros += j + ' ';
        }
        console.log(espacos + numeros);
    }
}

// Forma 3: Triângulo simétrico com letras
function trianguloLetras(linhas) {
    for(let i = 1; i <= linhas; i++) {
        let espacos = ' '.repeat(linhas - i);
        let letras = '';
        for(let j = 0; j < i; j++) {
            letras += String.fromCharCode(65 + j) + ' '; // 65 = 'A' ASC
        }
        console.log(espacos + letras);
    }
}

// Testando as 3
console.log("Triângulo 1 - Asteriscos:");
trianguloAsteriscos(5);
console.log("\nTriângulo 2 - Números:");
trianguloNumeros(5);
console.log("\nTriângulo 3 - Letras:");
trianguloLetras(5);