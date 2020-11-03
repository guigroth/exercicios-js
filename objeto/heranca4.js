//CONCEITO DE PROTÓTIPO: É A IDÉIA DE SE TER UM LINK PARA OUTROS OBJETOS, E PESQUISAR NA CADEIA DE PROTÓTIPOS AS FUNÇÕES OU ATRIBUTOS.
//ATRIBUTO PROTOTYPE(FUNÇÃO): TODA FUNÇÃO POSSUÍ ESSE ATRIBUTO.
//ATRIBUTO __PROTO__(OBJETO/FUNÇÃO): COMO UM OBJETO REFERÊNCIA SEU PROTÓTIPO.

function  MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__) 
/*Quando é criado uma função a partir de uma função construtora(new), o __proto__ aponta para a "função".prototype
e não para "object".prototype, que é quando criamos um objeto a partir do new Object ou a partir do objeto literal que tem como padrão o object.prototype*/

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//RESUMO:
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //Quando um objeto é instanciado a partir de uma função, eles são iguais.
console.log(MeuObjeto.__proto__ === Function.prototype) //o atributo __proto__  dessa função aponta por padrão para Function.protoype
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //Após o Object.prototype não existe mais nada na cadeia de protótipos.

//ilustracaoHeranca4.js PARA AJUDAR A ENTENDER MELHOR.