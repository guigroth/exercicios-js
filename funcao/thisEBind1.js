const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao) //o this está acessando o objeto(pessoa) no qual é dono da função (falar), sem ele não seria possível executar essa linha de código.
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigma funcional  e OO(orientada a objeto).

const falarDePessoa = pessoa.falar.bind(pessoa) /*Ao usar bind, precisa ser passado o objeto no qual o this será resolvido.
                                                  Esse método ''amarra'' um determinado objeto para que ele seja o "dono" da execução
                                                  daquele método sempre que ele for chamado.*/
falarDePessoa()




//PARA REFORÇAR: Array [], Função (), Objeto {}