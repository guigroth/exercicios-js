const nums = [1, 2, 3 , 4, 5 , 6, 7, 8, 9, 10]

for(x in nums) {
    if (x == 5) {
        break  //causa um ''desvio de fluxo'' para fora do seu laço em que está agindo(break só funciona com for, whie e switch) e sai do laço.
    }
    console.log(`${x} = ${nums[x]}`)  //retornará o índice de 0 a 4 do array e também seus respectivos valores até se igualar a 5.
}

for(y in nums) {
    if(y == 5){
        continue /*também causa um ''desvio de fluxo'', porém ele interrompe a repetição corrente e vai para a proxima repetição, nesse caso pula o índice 5
        (continue só funciona em while e for).*/
    }
    console.log(`${y} =  ${nums[y]}`)
}



externo: //Rótulo
for(a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break externo   /*como o break age com o laço mais próximo a ele apenas o if mais interno iria ser afetado por ele, 
                                               porém ao usar o break ''rotulado'' com o externo, ele irá agir no if mais externo.*/
        console.log(`Par = ${a}, ${b}`) 
    } //NÃO RECOMENDADO!
}
console.log('Fim!')