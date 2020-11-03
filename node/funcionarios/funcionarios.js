//O arquivo package-lock.json é criado para definir a versão exata em que o seu projeto/programa foi criada e à mantém nessa mesma versão.
//RESUMO DA EXPLICAÇÃO DO CÓDIGO ABAIXO: Fazendo uma requisição em cima da url abaixo para obter o conteúdo do arquivo no código.

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios') //axios é um "client http", faz requisições para obter informações de algo que está remoto.


//DESAFIO:
//Fazendo um filtro para retornar a mulher chinesa com o menor salário:
const chineses = f => f.pais === 'China' //f de funcionário
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual /*lê-se: "Se o funcionário.salario(func) for menor que o funcionarioAtual.salario(func), 
    retorne o funcionário, se não, retorne o funcionarioAtual (func)*/
}

axios.get(url).then(res => {
    const funcionarios = res.data
    console.log(funcionarios)

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)
    }
)