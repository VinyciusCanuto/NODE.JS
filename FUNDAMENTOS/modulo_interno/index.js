const meuModulo = require('./criei_um_mdulo')
console.log(meuModulo)

const soma = meuModulo.soma
const quadrado = meuModulo.aoQuadrado
const sub = meuModulo.subtração
//const div = meuModulo.divisao
const mult = meuModulo.multiplicação

soma(2,2)
quadrado(2)
sub(2,2)
//div(2,2)
mult(2,2)