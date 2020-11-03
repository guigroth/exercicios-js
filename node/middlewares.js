//middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { //...middlewares está utilizando o operador rest, que após ser passado várias funções dentro dele, ele às junta dentro de um ARRAY.
    const execPasso = indice => { // Para executar cada um dos passos, será passado como atributo o índice do array "middlewares" criado como parâmetro de exec acima.
    middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)