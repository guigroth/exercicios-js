function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado (que pertence apenas ao escopo dessa função Carro)
    let velocidadeAtual = 0


    //método público
    this.acelerar = function () { //responsável por acrescentar a velocidade atual que está visível apenas dentro da função.
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // Usando os parâmetros já definidos anteriormente (200, 5).
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) //utilizando novos parâmetros.
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //Função
console.log(typeof ferrari) //Objeto que foi instanciado a partir da função construtora

/*A FUNÇÃO FUNCIONA COMO UM CLASSE/MOLDE, E A PARTIR DELE, PODEM SER CRIADO INÚMEROS OBJETOS,
E O DADO INTERNO DAQUELA FUNCÃO PERTENCE A CADA UM DOS OBJETOS SEJA ELE PRIVADO OU NÃO.*/