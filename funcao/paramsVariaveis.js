function soma() {      
    let soma = 0 
    /* Toda função possui tem o array ''arguments'' disponível nela, e quando nenhum parâmetro é passado, ele está vazio.
    e também é possível pegar todos os parâmetros que foram passados a partir de uma chamada de uma função
    e fazer qualquer tipo de operação nele, como no exemplo abaixo que foi somado cada um dos parâmetros.*/
    for (i in arguments) {
        soma += arguments [i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 3.3, "Teste"))
console.log(soma('a', 'b', 'c'))  //retorna '' 0abc '' pois a variável soma já se inicializa com 0, e ao imprimir apenas strings, ele aparece junto.