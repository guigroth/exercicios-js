console.log(7 / 0) //Qualquer número dividido por 0 gera o infinito.
console.log("10" / 2)       ///é possivel fazer operações matematicas com tipos string que dentro contenham números, respeitando o formato do número.
console.log("Show!" * 2)  //Gera um NaN (Not a Number).
console.log(0.1 + 0.7)  //Gera uma imprecisão, devido a especificação de operação de número com ponto flutuante que o JS utiliza.
//console.log(10.toString()) , não é possivel chamar o número(literal) e a ".função "
console.log((10.345).toFixed(2)) //mas é possível chamar o número(literal) dentro de parênteses e a ".função", sem a necessidade de armazenar o número em uma variável.