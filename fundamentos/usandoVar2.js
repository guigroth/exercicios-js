var numero = 1       //Não existe escopo de bloco para uma variável do tipo '' var '', apenas dentro de uma função.
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//Escopo Global NÃO É RECOMENDADO!