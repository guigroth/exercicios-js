/*Callback nada mais é do que passar uma função e essa função será chamada quando um evento acontecer(nesse caso o loop), 
  e toda vez que esse loop acontecer ele encontra um novo elemento ele dispara a função(nesse caso o evento) que foi chamada.*/

const fabricantes = ["Mercedes", "Audi", "BMW"]
// O evento nesse caso é cada um dos elementos percorridos pelo array, pra cada elemento é chamado o Callback passando o próprio elemento e o seu índice.

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //forEach é uma função do array(nesse caso o fabricantes), passa como parâmetro para uma função o nome e o índice de um elemento.
fabricantes.forEach( fabricante => console.log(fabricante))