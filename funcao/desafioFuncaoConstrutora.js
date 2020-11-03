function Pessoa (nome){
    this.nome = nome  /*caso não tivesse o this, o código ainda sim iria funcionar porém não seria possível alterar o nome dessa variável
                        da mesma forma que ocorre em uma função factory.*/

    this.falar = function() {
    console.log(`Meu nome é ${this.nome}`) 
    }
}

const p1 = new Pessoa('João') 
p1.falar() 
console.log(p1.nome)

//É possível criar objetos a partir de uma função construtora, classe ou função factory.