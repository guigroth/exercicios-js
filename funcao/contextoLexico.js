const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()  /*retorna 'Global' pois a função carrega consigo o local onde ela foi definida, então ela procura dentro do seu escopo lexico,
          ou seja ao não ''encontrar'' a string Local, ela procura no escopo mais abrangente, não no seu local de execução mas sim
          onde foi definida.*/
            
