/* do/while é a única estrutura de controle na qual a expressão vem depois do bloco (no while)
pelo menos 1 repetição é garantida ao usar essa expressão, só então será verificado se deve continuar ou não.*/
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max, min) + min
    return Math.floor(valor)
}
let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while(opcao != -1)
console.log('Até a próxima')