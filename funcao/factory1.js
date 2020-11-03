//função factory é uma função que retorna um objeto.
//Factory Simples:
function criarPessoa() {
    return { //"Fabricando/Criando" novas instâncias de "Pessoa" a partir da chamada dessa função sem a necessidade de criar várias funções ou objetos.
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) 