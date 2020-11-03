console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    //this.perigo = '...'  DENTRO DE UMA FUNÇÃO O THIS APONTA PARA GLOBAL(escopo global)
}
//this.perigo = '...' FORA DE UMA FUNÇÃO O THIS APONTA PARA MODULE.EXPORTS
logThis()