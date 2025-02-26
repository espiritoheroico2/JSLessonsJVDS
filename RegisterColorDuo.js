`Em eletrônica, resistores têm bandas de cores que indicam seus valores. Neste exercício, você vai criar uma função que decodifica as duas primeiras bandas de cor de um resistor para formar um número.

Tarefa: Escreva uma função chamada decodedValue que:

Recebe um array com duas strings representando cores (ex.: ["brown", "black"]).
Retorna um número inteiro baseado nas posições dessas cores em uma lista padrão.
A lista de cores é: ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"].
Cada cor corresponde à sua posição na lista (ex.: "black" = 0, "brown" = 1, "red" = 2, etc.).
O número final é formado concatenando os valores das duas cores como dezena e unidade (ex.: "brown" e "black" → 1 e 0 → 10).
Casos de teste:

decodedValue(["brown", "black"]) → 10
decodedValue(["red", "violet"]) → 27
decodedValue(["yellow", "green"]) → 45
decodedValue(["black", "black"]) → 0`

function decodedValue(colors)
{
    let colorList = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

    let first = colorList.indexOf(colors[0]);
    let second = colorList.indexOf(colors[1]);

    let result = first * 10 + second;

    return result;

}

decodedValue(["brown", "black"]);
decodedValue(["red", "violet"]);
decodedValue(["yellow", "green"]);
decodedValue(["black", "black"]);
