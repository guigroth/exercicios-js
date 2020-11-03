console.log(soma(3, 4))

/* function declaration (tradicional)
    ao definir uma função dessa maneira, ela pode ser acessada mesmo antes da linha na qual ela foi chamada
    pois o interpretador do JS carrega as funções, deixando elas prontas antes de executar o código. */
function soma(x, y) {
    return x + y
}

/*function expression (declarar uma função anônima e atribuir ela a uma variável)
  só pode ser acessada DEPOIS de ter sido declada*/
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

/*named function expression (além de uma variável armazenar a função, ela também possui nome)  #MENOS USADA
  só pode ser acessada DEPOIS de ter sido declada*/
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))