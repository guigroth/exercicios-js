/* os métodos get e set ajudam a ter um maior nível de encapsulamento dentro de um objeto
    é possível também utilizar esses métodos para acessar os valores de uma forma mais controlada, podendo aplicar algum tipo de validação.*/
const sequencia = {
    _valor: 1, /*Convencionando um atributo. Essa convenção "mostra aos desenvolvedores" que a variável é pretendida ser acessada apenas internamente 
                 dentro do objeto em questão.(privada).*/
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //o "set" será ignorado pois não entrou na condição do if.
console.log(sequencia.valor, sequencia.valor)