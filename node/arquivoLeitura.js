const fs = require('fs')

const caminho = __dirname + '/arquivo.json' //__dirname é uma constante que representa o diretório atual.

// síncrono:  (Não Recomendado)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assíncrono:
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) /* SERÁ EXECUTADO DEPOIS DO CONSOLE.LOG ABAIXO, POIS NESSE CASO SERÁ MANDADA UMA CALLBACK 
    E SÓ QUANDO O ARQUIVO ESTIVER CARREGADO ELE SERÁ DISPARADO DE VOLTA*/
})

//Maneira simples de ler um arquivo do formato JSON:
const config = require('./arquivo.json')
console.log(config.db.host) //SERÁ EXECUTADO ANTES DO CONSOLE.LOG ACIMA, POIS NA LINHA 16 É EXECUTADO DE FORMA SÍNCRONA, CARREGA O OBJETO E O MOSTRA NO CONSOLE.

//Fazendo a leitura de uma pasta:
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})