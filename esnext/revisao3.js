// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) //Mostra os valores dos atributos do objeto.
console.log(Object.entries(obj)) //Retorna uma matriz (Array com arrays dentro), contendo suas respectivas chaves e valores.

// Melhorias na notação literal
const nome = "Ana" 
const pessoa = {
    nome,
    ola() {
        return "Oi gente!"
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal{
    falar () {
        return "Au Au"
    }
}
console.log(new Cachorro().falar())
