//IMPLEMENTAÇÃO DO FOREACH 
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++)
    callback(this[i], i, this) // 1º o this acessa o índice, 2º o this acessa o nome e 3º o índice acessa o prório array
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice ) {  //FOREACH "OFICIAL"
    console.log(`${indice + 1}) ${nome}`)
})
// APÓS A IMPLEMENTAÇÃO AS 2 MANEIRAS RETORNAM O MESMO RESULTADO.