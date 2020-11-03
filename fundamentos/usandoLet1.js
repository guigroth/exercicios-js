var numero = 1               //escopo maior
{
    let numero = 2                          //escopo menor
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

//Variáveis com '' let '', possuem escopo global, de função e de bloco
