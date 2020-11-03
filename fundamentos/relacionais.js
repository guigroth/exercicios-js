console.log('01-)', '1' == 1)
console.log('02-)', '1' === 1)
console.log('03-)', '3' != 3)
console.log('04-)', '3' !== 3)

console.log('05-)', 3 < 2)
console.log('06-)', 3 > 2)
console.log('07-)', 3 <= 2)
console.log('08-)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09-)', d1 == d2) //nesse caso irá comparar a referência de memória.
console.log('10-)', d1 === d2) //nesse caso irá comparar a referência de memória.
console.log('11-)', d1.getTime() === d2) //nesse caso está comparando '' number ''.

console.log('12-)', undefined == null)
console.log('13-)', undefined === null)

// == compara um dado a outro ignorando o tipo dele.
// === '' estritamente igual '', faz a comparação do dado e também de seu tipo (MAIS RECOMENDÁVEL).