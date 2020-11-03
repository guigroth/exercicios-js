const sequence = {
    _id: 1,
    get id () { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto   // como produtos é um objeto, a "chave" será o que está dentro dos colchetes e o valor será o produto.
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}
function deletarProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
module.exports = { salvarProduto, getProduto, getProdutos, deletarProduto} /* Fazendo com que as funções salvarProduto, getProdutoById e getProdutos fiquem visíveis fora do módulo atual.
                                                            OBS: o objeto sequence continua sendo algo interno apenas desse módulo já que não entoru no module.exports*/