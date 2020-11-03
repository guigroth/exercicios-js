const funcs = []

for(let i = 0; i < 10; i++) {
    funcs.push(function(){ //
        console.log(i)
    })
}
funcs[2]()  
funcs[8]()
//irá retornar o valor 2 e 8 no console, pois '' let '' possui escopo de função.