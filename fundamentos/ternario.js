const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' /** Para se ter um operador ternário (que possui 3 operandos), 
                                                                1 - é necessário ter uma expressão relacional (que retorna verdadeiro/falso)
                                                                2 - a interrogação ( ? )
                                                                3 - e o resultado da expressão caso for verdadeira e caso for falsa.
                                                                */

console.log(resultado(7.1))
console.log(resultado(6))