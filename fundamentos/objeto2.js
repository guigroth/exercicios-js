console.log(typeof Object)
console.log(typeof new Object())  // Ao instanciar a função com '' new '', retornará um objeto.

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente()) //  É possível também criar instancias de funções já definidas.

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())  // Também é possível criar instancias a partir de uma classe.
