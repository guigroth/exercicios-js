//A passagem dos parâmetros foram feitas por meio de uma função, e os parâmetros dessa função serão equivalentes aos parâmetros do módulo.
module.exports = function(...nomes){
    return nomes.map(nome => `Boa Semana ${nome}!`)
}