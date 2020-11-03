//IMPLEMENTAÇÃO DO REDUCE:
Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1 //Traduzindo: se valor inicial estiver setado(estabelecido), o índice inicial será 0, senão será 1.
    let acumulador = valorInicial || this[0] //Como não foi passado nenhum elemento para ser o valor inicial, será o primeiro elemento (0).
    for (let i = indiceInicial; i < this.length; i++) { //O CONTADOR SE INICIA NO 1, POIS O PRIMEIRO ELEMENTO "Acumulador" SERÁ O ÍNDICE 0.
        acumulador = callback(acumulador, this[i], i , this) //Ordem: acumulador atual, elemento atual, índice e array atual.
    }
    return acumulador
}
 
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))