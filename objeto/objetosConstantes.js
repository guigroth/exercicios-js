//pessoa -> 123 -> {...}
//O identificador "pessoa", aponta para um endereço de memória(Ex: 123), e é nesse endereço que o objeto é criado.
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)


/*pessoa -> 456 -> {...}  Não funcionará pois está tentando fazer com que a constante pessoa aponte para um novo endereço, 
                          pois foi criado um novo objeto com o atributo nome, e por ser uma constante ela sempre apontará para o objeto que está em "123".*/
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //Função freeze impossibilita o objeto em questão de ser alterado, deletado, adicionado valores, etc... em outras palavras o torna uma const.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome:'João'}) //Criando um "objeto constante", para nunca ser mudado, nem sua referência, nem o objeto.
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)