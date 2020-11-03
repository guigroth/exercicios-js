//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {   //recebendo uma função ''Anônima''
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

console.log(soma(2, 3))

// retorno implícito   (reduzir ainda mais a sintaxe, trocando o '' function '' pela arrow '' => '')
const subtracao = (a, b) => a - b //não foi usado return pois quando a função não possui corpo '' {} '', significa que a função irá executar apenas 1 sentença de código
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")
