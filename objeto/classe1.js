class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { /*constructor é a função que por padrão é chamada no momento que a classe for instanciada(usando o operador new),
                                                  a classe será transformada em uma função construtora, fazendo com que nome e valor sejam os parâmetros dessa função.*/
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }


    addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
}
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
    })
        return valorConsolidado
}
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz) //colocando os "parâmetros variáveis", devido a inserção do método addLancamentos(linha 16), é possível fazer isso.
console.log(contas.sumario())