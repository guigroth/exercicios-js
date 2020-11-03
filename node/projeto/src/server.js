/* '/produtos' (linha 7) é a URL da requisição, se removermos ela, e mudar a notação ponto para use,
                                                  a requisição será feita a partir de qualquer palavra escrita, EX: '/produtos2'.*/
const porta = 3003 // PORTA É UM PROCESSO DENTRO DE UM COMPUTADOR, E APENAS UM PROCESSO PODE OCUPAR UMA PORTA (a porta padrão caso não seja informada é a 80).
const express = require('express')
const app = express()
const bodyParser = require('body-parser') // faz um "parse" no body da requisição, transformando de string para objeto, para podermos acessar, EX: req.body.nome
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) /*urlencoded é uma função middleware que retornará outra função middleware. 
                                                    Para todas as requisições ele será disparado e se o padrão for urlencoded, ele transformará 
                                                    o corpo da função em um objeto para que seja acessado mais facilmente.*/

app.get('/produtos/', (req, res, next) => { 
    res.send(bancoDeDados.getProdutos()) // O Método send converte automaticamente para JSON.
})  
app.get('/produtos/:id', (req, res, next) => { 
    res.send(bancoDeDados.getProduto(req.params.id)) // req.params é o local onde se tem os parâmetros na URL nesse caso '/produtos/:id'
                                                     // se na URL também tivesse o parâmetro "nome" = '/produtos/:id/:nome', o params iria engloba-lo.
}) 

app.post('/produtos', (req, res, next) => {    
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  // JSON
}) 
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco 
    })
    res.send(produto)
})
app.delete('/produtos/:id', (req, res, next) => {    
    const produto = bancoDeDados.deletarProduto(
    req.params.id)
    res.send(produto)  // JSON
}) 

app.listen(porta, () => {
   console.log(`Servidor está executando na porta ${porta}.`)
})
