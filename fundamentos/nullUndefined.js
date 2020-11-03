let valor // não inicializada
console.log(valor)
console.log(valor2) //retorna '' is not defined'' que é diferente de Undefined, pois nesse caso a variável nem foi declarada.

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) da erro pois não é possível acessar nada a partir do operador ' . ', quando o que vem antes está nulo/undefined.

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco     Remove o atributo do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
