//USANDO CLASSE
class Pessoa {
    constructor(nome){ //O construtor é criado para que possa ser inicializado as variáveis que serão criadas.
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`) //O atributo nome tem que ser acessado com this, caso contrário não .
    }
}

const p1 = new Pessoa('João') //criando uma constante e instanciando uma nova pessoa
p1.falar() //irá retornar 'Meu nome é'


//USANDO FUNÇÃO FACTORY  
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)  /*não precisa do uso do This, pois esse objeto tem ciência do contexto no qual foi criado
                                                          -pode ser executado em outros lugares(browser) pois tem acesso a um escopo mais "abrangente"*/
    }
}

const p2 = criarPessoa('João')
p2.falar()

