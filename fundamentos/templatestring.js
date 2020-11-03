const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' // Seria mais trabalhoso ficar concatenando String por String dessa maneira caso o texto fosse maior.
const template = ` 
    Olá
    ${nome}!`
console.log(concatenacao, template) // A template String aceita quebras de linha, espaços em branco, ''Tabs'' dentro da String 

//Template Strings aceitam expressões e chamadas de método
console.log(`'1 + 1' = ${1 + 1}`)

const up = texto => texto.toUpperCase() 
console.log(`Ei... ${up('cuidado')}!`) /** a String ''cuidado'' em minúsculo irá passar pela função up, que nesse caso tem como objetivo trnasformar um texto
                                        minúsculo para maiúsculo.*/
                                        