const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj)) //A FUNÇÃO FOI "EXCLUIÍDA" DO JSON, POIS ELE É UM FORMATO TEXTUAL DE DADOS.


console.log(JSON.parse('"a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
//Arquivos JSON (formato textual) precisam ser escritos obrigatoriamente com aspas duplas.(OBS: qualquer string dentro de um JSON precisam de aspas duplas também)