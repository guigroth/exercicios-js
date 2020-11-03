//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
//ESSA FUNÇÃO IMPOSSIBILITA ADICIONAR MAIS ATRIBUTOS, PORÉM PERMITE A EXCLUSÃO E MODIFICAÇÃO.

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
//ESSA FUNÇÃO IMPOSSIBILITA ADICIONAR OU EXCLUIR ATRIBUTOS, PORÉM PERMITE A MODIFICAÇÃO.

//Object.freeze 
//ESSA FUNÇÃO IMPOSSIBLITA ADICIONAR, MODIFICAR OU EXCLUIR ATRIBUTOS, FAZ COM QUE SEUS VALORES SEJAM CONSTANTES.