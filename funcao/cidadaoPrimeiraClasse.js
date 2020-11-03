//Função em JS é First Class Object (Citizen)
//High-Order function

//Criar de formar literal
function fun1() {}

//Armazenando em uma variável
const fun2 = function () {}

//Armazanando em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0] (2, 3))

//Armazenando em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa' }
console.log(obj.falar())

//Passar função como parâmetro para uma outra função
function run(fun) {
    fun()
}
run(function () {console.log('Executando...') })

//Um função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3) (4) // 1ºManeira

const cincoMais = soma(2, 3) //2ºManeira
cincoMais(4)

