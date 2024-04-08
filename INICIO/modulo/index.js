const fs = require('fs')
//console.log(fs)

fs.readFile('arquivo.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})
//o readfFile espera receber 3 parâmetros | 1:Onde ta esse arquvio 2:criptografia desse arquivo 3: 