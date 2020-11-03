let a = 3

global.b = 123   //global no Node equivale ao window no browser.

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


//Criando uma variável maluca: sem var ou let!
abc = 3 //Não fazer isso.
console.log(global.abc)

//module.exports = {e: 456, f: false, g: 'teste'}

//É FUNDAMENTAL CONHECER O RUNTIME EM QUE SE ESTÁ TRABALHANDO, E ENTEDER AS ESPECIFICIDADES DE CADA UM DOS AMBIENTES.
/**Sempre que possível NÃO utilzar variáveis no escopo global, pois poderá sobrescrever algum dado com '' var '' ou '' let '',
 * porém caso for necessário tocar o escopo global, fazer utilizando um objeto, e ir alimentando-o de acordo com a necessidade.
*/