// Função para desenhar um triângulo de estrelas
function desenharTrianguloEstrelas(altura) {
    // Loop externo: controla o número de linhas
    // 'i' representa a linha atual, começando de 1 até a altura desejada
    for (let i = 1; i <= altura; i++) {
        // Parte 1: Calcula os espaços à esquerda
        // Precisamos de (altura - i) espaços para centralizar as estrelas
        let espacos = ' '.repeat(altura - i);
        
        // Parte 2: Calcula as estrelas
        // Para cada linha, o número de estrelas é (2 * i - 1)
        // Exemplo: linha 1 = 1 estrela, linha 2 = 3 estrelas, linha 3 = 5 estrelas
        let estrelas = '*'.repeat(2 * i - 1);
        
        // Parte 3: Junta espaços e estrelas e exibe a linha
        // Concatenamos os espaços com as estrelas para formar cada linha
        console.log(espacos + estrelas);
    }
}

// Testando a função com uma altura de 5 linhas
console.log("Triângulo de Estrelas:");
desenharTrianguloEstrelas(5);

// O que cada linha faz:
// 1. Define a função que recebe a altura como parâmetro
// 2. Usa um loop 'for' para criar cada linha
// 3. Calcula espaços usando repeat() para alinhar o triângulo
// 4. Calcula estrelas usando a fórmula (2*i-1) para criar o formato triangular
// 5. Mostra cada linha combinando espaços e estrelas
