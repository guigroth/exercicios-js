const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //Não é mais necessário essa duplicidade com a nova versão do ES 2015
const obj2 = {a, b, c}
console.log(obj1, obj2)

//Criando dinâmicamente um atributo em um objeto usando uma string:
const nomeAttr = 'nota' // <- string 'nota' é o nome do atributo
const valorAttr = 7.87 // <- valor que vai ser atribuído para a string.

const obj3 = {} 
obj3[nomeAttr] = valorAttr //utilizando a notação de colchetes
console.log(obj3)

// Utilizando as melhorias da nova versão do ES 2015:
const obj4 = {[nomeAttr]: valorAttr} //Automaticamente pega o valor da constante/variável e cria um atributo com esse valor.
console.log(obj4)

const obj5 = {
    funcao1: function() { 
        //...
    },
    funcao2() { //Nova Forma do ES 2015
        //...
    }
}

console.log(obj5)