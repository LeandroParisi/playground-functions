// **13 - Bem vindo ao Bar da Trybe!**
// -
// Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

// Crie a função `hydrate` que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:
// ```
// String recebida:
//   "1 cerveja"
// String retornada:
//   "1 copo de água"
// ```

// ```
// String recebida:
//   "1 cachaça, 5 cervejas e 1 copo de vinho"
// String retornada:
//   "7 copos de água"
// ```

// ```
// String recebida:
//   "1 cachaça, 5 cervejas e 1 copo de vinho"
// String retornada:
//   "7 copos de água"
// ```

const testString = "1 cachaça, 5 cervejas e 1 copo de vinho"

// Unicas bebidas que podem vir no array seriam:
// cachaça, cervejas, copo de vinho

const desafioExtra = "1 chocolate, 5 cervejas e 1 copo de vinho"

// Desafio 13
function hydrate() {
    let cupsToDrink = 0
    for (const currentLetter of testString) {
        if (Number.isInteger(Number(currentLetter))) {
            cupsToDrink += Number(currentLetter)
        }
    }

    return cupsToDrink
    // seu código aqui
}

hydrate()
  