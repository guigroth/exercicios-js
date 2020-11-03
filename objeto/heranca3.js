const pai = {nome: 'Pedro', corCabelo: 'preto'} 

const filha1 = Object.create(pai) //esse método define que o protótipo é o objeto que foi passado como parâmetro.
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) { //Verificando se uma determinada propriedade pertence ou não ao objeto no qual se está percorrendo.
    filha2.hasOwnProperty(key) ? //Retorna true ou false (nome retorna true) porém a cor do cabelo veio por herança(false).
        console.log(key) : console.log(`Por Herança: ${key}`)
}