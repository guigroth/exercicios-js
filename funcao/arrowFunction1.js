let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {  //Função arrow sempre será anônima, para acessa-la posteriormente é necessário armazená-la em uma variável ou constante.
    return 2 * a
}

dobro = a => 2 * a //Quando é removido as chaves, se tem um retorno implícito. Muito usado em funções com uma única linha.
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um param
console.log(ola())