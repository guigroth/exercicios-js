function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}


global.preco = 20
global.desc = 0.1
console.log(getPreco()) //chamando a função diretamente.
console.log(produto.getPreco()) //chamando a função a partir de um objeto, nesse caso usando o produto como sendo o ''contexto'' para o this ser resolvido.

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$'])) //ao usar apply, ele espera que o parâmetros sejam passados dentro de um array.

//a diferença entre call e apply é a forma como é passado os parâmetros para a chamada da função.