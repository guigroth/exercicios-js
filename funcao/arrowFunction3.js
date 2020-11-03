let comparaComThis = function (param) {
     console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)  //A Função arrow não permitira que o bind altere o lugar no qual o this está "apontando".
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//O this de uma função arrow é um this associado a um contexto no qual a função foi escrita