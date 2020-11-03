const alunos = [
    { nome: 'João', nota: 7.3, bolsita: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
/*NO REDUCE, PODEMOS OU NÃO PASSAR UM VALOR INICIAL, POIS NA PRIMEIRA EXECUÇÃO, OS PRIMEIROS 2 VALORES SÃO PASSADOS( O 1º com o valor anterior e o 2º com o valor atual)
  e vai executando sempre o resultado de uma callback passando como "Acumulador" (valor anterior), para a próxima callback, até executar todas.*/
const resultado = alunos.map(a => a.nota).reduce(function(aculumador, atual){
    console.log(aculumador, atual)
    return aculumador + atual
}, 0/* Adicionando um valor inicial(opcional)*/)

console.log(resultado)