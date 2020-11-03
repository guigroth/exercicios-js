function pessoa() {
    this.idade = 0

    const self = this         /*Criando uma constante para acessar os atributos do "this" no qual seria acessado.
                                Essa constante será acessada dentro de uma função, ou seja, 
                                Não importa quem esteja chamando a função pois ela sempre estará apontando para "Pessoa".
                                Isso serve para ''driblar'' o fato do this variar.*/
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa
