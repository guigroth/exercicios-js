function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //Operador bitwise xor  (que opera em cima de bit a bit)
    const comprarTv32 = trabalho1 != trabalho2      /**o '' ou exclusivo '' pode ser simulado com o símbolo de diferença, 
                                                    pois para ser verdadeiro, os dois resultados precisam ser diferentes*/
    const manterSaudavel = !comprarSorvete   //único operador unário desse exercício.
    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} /**Novo recurso do ES 2015 permite o retorno de um objeto( par chave/valor )
                                                                        sem a necessidade de criar o nome da chave: nomeDoValor,
                                                                        passando o mesmo nome de um para o outro.*/
}

//console.log(compras(true, true))                
//console.log(compras(true, false))
//console.log(compras(false, true))
//console.log(compras(false, false)) 

//tabela de verdade