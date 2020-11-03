// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!') 
    /*é necessário "envolver" a criação dessa função essa função com os parênteses, só então ela poderá ser invocada/chamada.*/
})() 
//é possivel também definir constantes, variáveis, criar outras funções dentro do escopo da IIFE.