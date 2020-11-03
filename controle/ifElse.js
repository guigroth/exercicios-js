const ImprimirNota = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    }else {
        console.log('Reprovado!')
    }
}
ImprimirNota(8)
ImprimirNota(6)
ImprimirNota('Epa!') //Retorna ''falso'' pois compara uma string com a condição acima na qual possui um número inteiro.