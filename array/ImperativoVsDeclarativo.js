const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativo = o mais importante é COMO tem que ser feita determinada ação.
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 /alunos.length)

//Declarativo = o mais é importante é O QUE tem que ser feito naquela determinada ação.

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual //aqui estão os critérios usados para a soma.
const total2 = alunos.map(getNota).reduce(soma)  //O Reduce também serve para agredar(reduzir) os valores.
console.log(total2 / alunos.length)