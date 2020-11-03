let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--)  /**DESAFIO: retorna verdadeiro pois o incremento usado da forma pré-fixada possui preferência sobre a comparação,
                                   sendo executado antes da mesma, e somente depois é feito o decremento de num2.*/

console.log(num1 === num2)