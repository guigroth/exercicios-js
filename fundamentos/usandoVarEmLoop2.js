const funcs = []

for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
//é retornado o valor '' 10 '' pois '' var '' não possui escopo de função, e o valor retornado será o resultado da variável quando ela sair da estrutura de controle.