const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento na ultima posição
console.log(pilotos)

pilotos.shift() //remove o elemento da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona o elemento na primeira posição
console.log(pilotos)

//usando o splice para adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //adiciona 'Botas' e 'Massa' ANTES do elemento na posição 2 (Raikkonen)
console.log(pilotos)

//usando o splice para remover
pilotos.splice(3, 1) // removendo o ultimo elemento

const algunsPilotos1 = pilotos.slice(2) // retorna um novo Array
//console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Pega uma "fatia" do array, nesse caso começa pelo elemento na posição 1 INCLUINDO ele e vai até o 4 NÃO INCLUINDO ele.
//console.log(algunsPilotos2)