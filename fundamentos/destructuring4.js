function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))  //recebe por padrão min e max, mesmo sem específicar
console.log(rand([992]))     //recebe apenas o min, deixando max com seu valor padrão.
console.log(rand([, 10]))    //seta o valor de max para 10 e o min continua com seu valor padrão.
console.log(rand([]))        //retorna um número aleatório entre min e max.
//console.log(rand())        não funcionará pois está tentando desestruturar um atributo undefined/null de um array.