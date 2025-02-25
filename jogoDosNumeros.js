// Jogo de Adivinhação de Números
// O programa gera um número aleatório entre 1 e 100, e o jogador tenta adivinhar

// 1. Declare uma variável para armazenar o número aleatório gerado pelo computador
// Dica: Use Math.random() para gerar um número entre 0 e 1, multiplique por 100 e use Math.floor() para arredondar
let numeroSecreto = Math.floor(Math.random() * 100); // Complete aqui

// 2. Crie uma função que verifica o palpite do jogador
function verificarPalpite(palpite) {
    // 3. Adicione uma condição: se o palpite for igual ao numeroSecreto, retorne "Parabéns, você acertou!"
    // Dica: Use um if para comparar palpite com numeroSecreto
    if(palpite === numeroSecreto)
        {
            return "parabens, voce acertou"

        } else if (palpite > numeroSecreto)
        {
                return "muito alto, tente novamente"
        }else
        {
            return "muito baixo, tente novamente"
        }
    // 4. Adicione uma condição: se o palpite for maior que o numeroSecreto, retorne "Muito alto, tente novamente!"
    
    // 5. Adicione uma condição: se o palpite for menor que o numeroSecreto, retorne "Muito baixo, tente novamente!"
    
    // 6. Caso nenhuma condição seja atendida (opcional), retorne uma mensagem de erro
}

// 7. Teste a função com um palpite qualquer
console.log(verificarPalpite(50));
// Substitua 50 por outros números para testar diferentes cenários

// 8. (Opcional) Adicione uma variável para contar o número de tentativas do jogador
let tentativas = 0;

// 9. (Opcional) Modifique a função verificarPalpite para incrementar a variável tentativas a cada chamada
// e exibir o número de tentativas na mensagem de retorno