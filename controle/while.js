//O uso de while é mais comum para casos em que terá um número indeterminado de vezes que uma repetição irá ocorrer.
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) 
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima!')