let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //ao usar a exclamação que significa negação logica, o console ira retorar valores booleanos de verdadeiro(" !! ") e falso (" ! ").

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // uma string que contenha ao menos 1 valor válido ou espaço vazio ainda sim retornará verdadeiro.
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))  /*Em casos que há uma atribuição, se o resultado for resolvido para um valor verdadeiro, irá retornar verdadeiro
                                   Caso tenha sido inserido algum valor válido para ser retornado após o simbolo de igual, ele irá retornar o que está la dentro*/


console.log('os falsos...')
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) /* tabela da verdade, nesse caso utilizando o ''OU'', nesse caso, irá
                                         retornará o primeiro valor verdadeiro que estiver dentro dos parêteses */
let nome = ''
console.log(nome || 'Desconhecido')