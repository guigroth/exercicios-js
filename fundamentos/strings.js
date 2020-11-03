const escola = "Cod33r"

console.log(escola.charAt(4)) // Retorna o caractere que está no índice informado
console.log(escola.charAt(5)) // Retorna nulo, pois não possui indice de valor 5 (algumas linguagens retornaria uma mensagem de erro)
console.log(escola.charCodeAt(3)) //Retorna o código do caractere de acordo com a tabela ascii/unicode
console.log(escola.indexOf('r')) // Retorna o índice associado ao caractere escolhido

console.log(escola.substring(1)) // Retorna os caracteres a partir do indice escolhido
console.log(escola.substring(0, 3)) //Retorna o primeiro índice(0) até o índice final(3), sem incluir o índice final.

console.log('Escola '.concat(escola).concat("!")) // Concatena a String "Escola" com o conteúdo da constante "escola" e também adiciona o "!".
console.log('Escola ' + escola + '!') //Alternativa para realizar a concatenação.
console.log(escola.replace(3, 'e')) // Substitui o 3 pela letra 'e'.

console.log("Ana, Maria, Pedro".split(',')) // Split converte a String em um array, quebrando/separando a String a partir da ',' criando assim 3 elementos independentes.



//Literal é o dado/valor que é utilizamos sem armazenar em uma variável. Ex: 1  10  'Palavra qualquer dentro de aspas (String)' 