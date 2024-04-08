//sincrona - statica
// fs = File System

const fs = require('fs')

console.log('start')

fs.writeFileSync('Arquivo1.txt', 'olá Bisonho')

console.log('End')