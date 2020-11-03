const ferrari = {
    modelo: 'F40',
    velMaxima: 324
}

const volvo = {
    modelo: 'V40',
    velMaxima: 200
}


//console.log(ferrari.prototype) OBS: Um objeto não possui o atributo prototype. 
console.log(ferrari.__proto__) //Acessando de dentro de um objeto o seu protótipo.
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)

//UM OBJETO EM JS TEM UMA REFERÊNCIA PARA O SEU PROTÓTIPO, E ESSA É A FORMA QUE É DEFINIDA A HERANÇA.
/*A PARTIR DA REFERÊNCIA PARA UM PROTÓTIPO TEMOS UMA REFERÊNCIA PARA UM OUTRO OBJETO, E ESSE OBJETO TEM ATRIBUTOS E COMPORTAMENTOS QUE
  PODEM SER ACESSADOS A PARTIR DO OBJETO "FILHO", É POSSÍVEL COLOCAR UM ATRIBUTO QUE NÃO EXISTE NO "FILHO", POIS SERÁ BUSCADO NO PROTÓTIPO "PAI",
  OU "AVÔ" CASO NÃO ENCONTRE NADA NO PROTÓTIPO "PAI" E ASSIM POR DIANTE.*/