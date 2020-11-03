console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null  
console.log(module.exports)

exports = {
    nome: 'Teste'
}
/*Mesmo alterando a referência de exports 2 vezes, o module.exports continua apontando para o mesmo objeto. 
Pois "this" e "exports" são simplesmente outras variáveis que apontam para um mesmo objeto, e quem realmente será exportado a partir de um módulo é o module.exports.*/
console.log(module.exports)

module.exports = {publico: true} //Maneira correta de atribuir um novo objeto para ser exportado.