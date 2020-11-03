//O uso de switch é mais comum para casos em que terá uma seleção múltipla de escolhas a serem feitas.
const ImprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra!')
            break                          //faz com que a execução da sentença pare após satisfazer a condição, caso contrário seria executado todas as outras também.
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:    //como o case 3, 2 e 1 estão vazios e sem break, eles avançam para o próximo.
            console.log('Reprovado')
        default: // equivale ao ''else', caso não tenha entrado em nenhum dos outros cases, será executado o default(padrão).
            console.log('Nota Inválida')
    }
}

ImprimirResultado(10)
ImprimirResultado(8.9) //Será arredondado para 8 devido ao uso da função Math.floor
ImprimirResultado()