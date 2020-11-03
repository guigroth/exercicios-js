/* os Arrays em Javascript são estrutura de dados dinâmicos, ele pode crescer ou diminuir a partir do momento que for adicionado ou retirado elementos,
   são indexadas e heterogêneas, sendo possível misturar dados, mesmo não sendo uma boa prática. 
   Ex: Inserir dentro de um array diferentes tipos de dados = [1, 'Música', true, null] */

   const valores = [7.7, 8.9, 6.3, 9.2]
   console.log(valores[0], valores[3])
   console.log(valores[4]) //Ao tentar acessar um índice que não existe retorna "Undefined".

   valores[4] = 10 /* preenchendo o valor do íncide 4 do vetor para não retornar "Undefined".
                      é possivel colocar um índice maior que a quantidade existente, >> Ex: [35]
                      fazendo com que o console retorne o número de índices vazios até chegar no qual contenha alguum valor. */
   console.log(valores)
   console.log(valores.length) //retorna a quantidade de elementos dentro de um array.

   valores.push({id: 3}, false, null, 'teste') // Adiciona novos elementos no array.
   console.log(valores)

   console.log(valores.pop()) // Retira e retorna o ultimo índice do array.
   delete valores[0] // Remove um atributo dentro de um objeto, nesse caso exclui o índice 0.
   console.log(valores)

   console.log(typeof valores)