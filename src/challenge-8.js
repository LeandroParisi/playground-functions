// **8 - FizzBuzz**
// -
// Crie uma função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:

// - Para cada número da Array que seja divisível por 3, apresente uma string `"fizz"`;
// - Para cada número da Array que seja divisível por 5, apresente uma string `"buzz"`;
// - Caso o número seja divisível por 3 ou 5, retorne a string `"fizzBuzz"`;
// - Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`.

const test = [2, 15, 7, 9, 45]

// Desafio 8
function fizzBuzz() {
    const result = []

    for (const currentItem of test) {
        if (currentItem % 3 === 0) {
            result.push('fizz')
        } else  if (currentItem % 5 === 0) {
        }
    }
    // seu código aqui
}