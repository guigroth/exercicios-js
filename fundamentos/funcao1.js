//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) // retorna um not a number no segundo parâmetro que está vazio
imprimirSoma(2, 3 ,4 ,5 ,6) // os parâmetros posteriores ao segundo serão ignorados

// função com retorno
function soma(a, b = 0) { //setando um valor padrão para o segundo parâmetro
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())