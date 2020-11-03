// novo recurso do ES 2015

const pessoa =  {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua João Pessoa',
        numero: 528
    }
}
const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const{ endereco: {logradouro, numero, cep   }} = pessoa
console.log(logradouro, numero, cep)

//const{ conta: {ag, numConta }} = pessoa
//console.log(ag, numConta)   não irá retornar nada pois esses atributos não existem.

//Distructuring extrai de uma estrutura (objeto/array) seus atributos ou elemestos.