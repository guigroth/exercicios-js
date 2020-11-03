console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
/*Ordem: split(função de string) é uma função que quebra todas as letras da string e as transforma num array(incluindo espaços)
após ser transformado em array, o .reverse(função de array) faz a inversão de todos os elementos desse array
.join junta novamente todos os elenentos na string. */
console.log('Escola Cod3r'.reverse())

//Acessamos o array ou a string dentro de um método prototype a partir do this
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4].first())
console.log(['a, b, c , d'].first())

String.prototype.toString = function() { //NÃO RECOMENDADO
    return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse())