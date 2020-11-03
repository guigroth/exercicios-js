//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira' //Por ser dinâmico, mesmo que o objeto "produto" não tenha nome, ao atribuir "Cadeira", o atributo também é criado.
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

//Criação Literal de Objetos:
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro:'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ //Objetos podem conter atributos que são arrays, que contém conjunto de objetos ou dados básicos.
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000  //acessando os atributos a partir da notação ponto.
carro['proprietario'] ['endereco']['logradouro'] = 'Av Gigante' //Acessando a partir de Strings (interessante quando se tem o nome dos atributos).
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //Não retorna um erro, apenas retorna undefined.
console.log(carro.condutores.length) //Retorna um erro pois não é possível acessar um atributo(EX: Length) de algo que está undefined ou null(não aponta pra ninguém).