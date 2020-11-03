require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' //O nome não será alterado por causa do método freeze, porém, normalmente um objeto compartilhado é passível de alteração.
console.log(MinhaApp.nome)