function Pessoa() {
    this.idade = 0 

    setInterval(() => { //Usando arrow function.
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa