//Sempre que uma classe terminar com Cliente, ela estará usando módulos de outros classes.
//Para importar algo utilizando o commomJS, utilizaremos a palavra reservada "require":
const moduloA = require('./moduloA') // o require('./) concede acesso àquilo que foi exportado.  (./ é o "Caminho Relativo")
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite()) 
console.log(moduloB)