const prod1 = {}  //Par de chaves representa um objeto, um objeto é um CONJUNTO DE CHAVE/VALOR >> Ex: Chave = Nome do atributo/ Valor = String, Número,Boolean, etc.

prod1.nome = 'Celular Ultra Mega'  //Dentro de um objeto contém apenas um identificador ÚNICO.
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40  //evitar atributos com espaço

console.log(prod1) 

const prod2 = { // é possível adicionar a chave e os valores dinâmicamentes como feito acima, ou adicionar dentro da própria criação do objeto.
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {  //CRIADO PARA EXEMPLIFICAR >> é único dentro de prod2.
        blabla: 1, //CRIADO PARA EXEMPLIFICAR
        obj: {     //CRIADO PARA EXEMPLIFICAR
            blabla : 2 //CRIADO PARA EXEMPLIFICAR >> é unico dentro de obj.
        }
    }
}
console.log(prod2)
