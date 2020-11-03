const soma = function (x, y) {   //Uma função anônima é uma função sem nome.
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
     console.log(operacao(a, b))
}
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){  //Colocando uma nova função dentro da chamada de uma função já existente, realizando uma subtração ao invez de uma soma.
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}