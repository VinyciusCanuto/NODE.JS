//tratativas de erros

//Bloco de código para tratar instruções async
//try {
    //instrução de demora para acontecer
//} catch (error) {
//    console.log(error)
//}

const b = '10'

if(!Number.isInteger(b)){
    console.log('O valor de B não for um valor inteiro')
    //return
    throw new Error('O valor de B não for um valor inteiro') // essa função vai parar a execução e mostrar o error
}

console.log('resto do códigos')