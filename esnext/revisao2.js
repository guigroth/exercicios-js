// Arrow Function
const soma = (a, b) => a + b  // Caso a função não tenha corpo, o return é implícito (ocorre automaticamente).
console.log(soma(2, 3))


// Arrow Function (this)
const lexico1 = () => console.log(this === exports) //Em uma arrow function, o this sempre apontará para exports/module.exports.
                                                    //diferente de uma função tradicional, na qual o this aponta para global.

const lexico2 = () => lexico1.bind({}) //Caso fosse uma função tradicional, com o bind, a função iria apontar para o objeto "{}".
lexico1()
lexico2()

//parâmetro default
function log(texto = "Node") {
    console.log(texto)
}

log() 
log("Sou mais forte") //Assumirá o valor padrão (Node) do parâmetro, a não ser que seja alterado para null ou seu parâmetro for alterado, ex: "Sou mais forte".

// operador rest   (No âmbito de funções, o nome correto é Rest, já no âmbito de Array e Objetos o nome correto é Spread)
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

