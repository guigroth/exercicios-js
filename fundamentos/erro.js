function tratarErroELancar(erro) {
    //throw new Error('Erro no Sistema')
    //throw 10 
    //throw true
    //throw 'mensagem'
    throw {  //Lança um erro, mas também pode lançar qualquer outro tipo como um número, boolean, data, objeto, etc.
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj)  {
    try{                            //Dentro de try coloca-se códigos que estão potencialmente sujeitos a erros.
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e) {                     //Então irá cair no catch (captura o erro).
        tratarErroELancar(e)
    }finally {                      //Acontecendo erro ou não, irá cair no finally.
        console.log('final')
    }
}
   
const obj = {nome: 'Roberto' }
imprimirNomeGritado(obj)

