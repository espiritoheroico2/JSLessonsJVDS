// Função que cria a frase "Two Fer"

// O parâmetro 'name' é opcional
function twoFer(name = "you") {
    // 1. Se 'name' não for fornecido (undefined), use "you" como padrão
    // Dica: Use um operador ternário ou uma atribuição padrão
    //let person = name ? name : "you"; // Complete ou ajuste aqui
    
    // 2. Retorne a string no formato correto
    // Use concatenação ou template literals (`${variavel}`)
    return `one for ${name}, one for me.`; 
}


function twoFerAlternative(name) {
    let person = name === undefined ? "you" : name;
    return `One for ${person}, one for me.`;
}

// Testes para verificar
console.log(twoFer("Alice")); // Deve retornar "One for Alice, one for me."
console.log(twoFer());        // Deve retornar "One for you, one for me."