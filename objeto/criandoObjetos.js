// usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)  //o new object(função construtora) automaticamente invoca essa função.
const obj2 = new Object
console.log(obj2)
 
//Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome /* Nesse caso, a partir do momento em que o Produto foi criado, não é possível alterar o valor do preço/desconto 
                        pois esses 2 parâmetros estão visíveis apenas dentro do escopo da função.*/

    this.getPrecoComDesconto = () => { /* O objeto tem acesso a esses 2 valores(nesse caso os 2 parâmetros citados acima), mas eles não estão dísponíveis fora do objeto.
                                          pois estarão encapsulados*/
        return preco * (1 - desc) 
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15) // LEMBRETE DE COMO ADICIONAR UMA PORCENTAGEM DE DESCONTO (15%)!
const p2 = new Produto('Notebook', 2998.99, 0.25) // LEMBRETE DE COMO ADICIONAR UMA PORCENTAGEM DE DESCONTO (25%)!
//É possivel acessar e/ou alterar o nome do produto devido ao this torne o nome um atributo público, porém o preço e desc não pois seu escopo é apenas dentro da função.
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory - Nela é possível usar tanto uma função construtora como uma notação literal.

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() { //Calcula o salário com base nas faltas do funcionário.
            return (salarioBase / 30) *  (30- faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7890, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Objec.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna Objeto...
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)