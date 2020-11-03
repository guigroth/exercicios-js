/* VAR e LET declaram VARIÁVELS!
* CONST declara constantes.
*/
var a = 3
let b = 4

//Ao usar ''VAR'' é possível redeclarar uma variável no mesmo escopo (Não é muito utilizado).
var a = 30 
b = 40

//Ao usar ''LET'' ele sempre irá imprimir seu ultimo valor declarado, pois não pode ser redeclarado

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
//c = 50

console.log(c)