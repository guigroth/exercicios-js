const _ = require('loadsh') // o _ serve para referenciar uma biblioteca
                            /* ao executar esse tipo de import, o sistema irá procurar dentro de node_modules e dentro dele, irá procurar o arquivo "index.js"
                            para executar esse import */
setInterval(() => console.log(_.random(1, 10)), 2000)