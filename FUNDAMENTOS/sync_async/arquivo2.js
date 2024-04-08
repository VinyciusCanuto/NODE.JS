//async
const fs = require('fs')

console.log('start')

fs.writeFile('Arquivo2.txt', 'olá', ()=>{
    setTimeout(()=>{
        console.log('Arquivo Criado')
    },3000)
})

console.log('End')