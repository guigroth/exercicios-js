// A PARTIR DA CONSTANTE PROCESS, PODEMOS LER DADOS DO TECLADO DO USUÁRIO E TAMBÉM CONSEGUE IMPRIMIR NA ENTRADA(teclado) E NA SAÍDA(monitor) PADRÃO  DO COMPUTADOR.

const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n') //stdout = Standart Output - seria o console.
    process.exit()
} else {
    process.stdout.write('Escreva seu nome: ')
    process.stdin.on('data', data => { //stdin = Standart Input  |  O Evento data ocorre quando apertar Enter 
        const nome = data.toString().replace('\r\n', '') // o replace é utilizado neste caso pois a quebra de linha já está inserida por padrão.

        process.stdout.write(`Fala ${nome}!!\n  `) 
        process.exit()
    })
}
 
