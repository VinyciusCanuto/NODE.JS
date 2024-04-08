//
const readline = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout
})
 
readline.question('digite seu nome:', (nome)=>{
    console.log(`O nome do bisonho é: ${nome}`)
    readline.close()
})
