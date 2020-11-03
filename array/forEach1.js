const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice /*,array, x */) { /*Usando uma callback que será chamada para cada interação que for feita no array, ou seja
                                             para cada novo elemento que for percorrido, será chamada a callback passando o nome, índice e o próprio array*/
    console.log(`${indice + 1}) ${nome}`)
    /*console.log(x) retorna undefined
    console.log(array) é possível suprimir qualquer parâmetro em JS que não deseja utilizar.*/
})

aprovados.forEach(nome => console.log(nome)) //usando arrow func com apenas 1 parâmetro, irá imprimir apenas os nomes e os parâmetros embora passados serão ignorados.

const exibirAprovados = aprovado => console.log(aprovado) //outra maneira de acessar e imprimir apenas o nome.
aprovados.forEach(exibirAprovados)
