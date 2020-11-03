const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)

/*Ambos resultados possuem valores diferentes pois no
1º caso foi exportado um objeto do node e ele faz "cache" desse objeto, e se esse objeto ja estiver sido
criado ele retorna sempre a mesma instância, e no
2º caso foram criadas novas instâncias usando uma função factory.*/
