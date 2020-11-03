{
    {
        {
            {
                var sera = 'Será???'  //Criando uma variável do tipo '' var '' dentro de um bloco que não é uma função, ela será visível fora do bloco(GLOBAL)
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste () {
    var local = 123   // Criando uma variável do tipo '' var '', dentro de um escopo de uma função, ela será visível apenas dentro da função.
    console.log(local)
}
teste()
//console.log(local)