console.log(typeof Array, typeof new Array, typeof []) //Array = Função, Operador New + Função = Objeto e Array Literal = Objeto

let aprovados = new Array('Bia', 'Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])   

aprovados[3] = 'Paulo' //Adicionando um novo elemento (RECOMENDADO PARA SUBSTITUIR)
aprovados.push('Abia') //Método mais usado e recomendado para adicionar elementos.
console.log(aprovados.length)

aprovados[9] = 'Rafael' // todos os elementos do array que não tem valor ficaram undefined até chegar no 9 (Rafael)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados) 
aprovados.sort() //Causa uma alteração no array, fazendo com que ele fique ordenado em ordem alfabetica ou crescente.
console.log(aprovados)

delete aprovados[1] //altera o elemento desejado para undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos','Ana']
aprovados.splice(1, 1) /*Método versátil que pode incluir/excluir elementos em um determinado índice ou ambos.
                        o primeiro parâmetro é o índice, o segundo é a quantidade de elementos que deseja excluir a partir daquele índice, e
                        também é possível colocar quantos elementos serão adicionados(usando aspas).*/
console.log(aprovados)
