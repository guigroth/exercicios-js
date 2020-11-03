//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //NÃO RECOMENDADO/TOMAR MUITO CUIDADO, POIS ESTARÁ IMPACTANDO EM TODOS OS OBJETOS DA APLICAÇÃO.
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0,filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {  //função para retornar a velocidade atual da velocidade máxima.
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //Ao definir a ferrari como tendo o protótipo carro o atributo velMax irá sofrer o sombreamento(Shadowing).
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super irá chamar o método status do protótipo carro.
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300) 
console.log(ferrari.status())