//Visível apenas dentro do módulo:
let a = 2

//Visível para fora do módulo:
module.exports = {
    bomDia: 'Bom Dia',
    boaNoite() {
        return 'Boa Noite'
    }
}