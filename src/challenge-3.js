// Exemplo: se a função receber a string `"go Trybe"`, o retorno deverá ser `['go', 'Trybe']`.

const testPhrase = 'go Trybe'
// Desafio 3
function splitSentence(phrase) {
    const splitPhrase = []
    let currentWord = []

    // 1. percorrer a frase letra a letra
    for (i = 0; i <= phrase.length - 1; i += 1) {
        const currentLetter = phrase[i]

        // 2. ao identificar o espaço, devo pegar tudo que esta antes o espaço
        if (currentLetter === ' ' || i === phrase.length - 1) {
            if (i === phrase.length - 1) {
                currentWord.push(currentLetter)
            }
            //  terminou uma palavra
            splitPhrase.push(currentWord)
            currentWord = []
            continue
        }
        currentWord.push(currentLetter)
    }
    return splitPhrase
    // 3. salvar o texto capturado no passo 2 em um array 
}

splitSentence(testPhrase)
  