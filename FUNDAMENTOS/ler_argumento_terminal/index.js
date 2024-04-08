console.log(process.argv)

const args = process.argv.slice(2)
console.log(args)

const nome = args[0].slipt('=')[1] // 'nome=Vinycius
console.log(nome)

const idade = args[1].slipt('=')[1] // 'nome=Vinycius
console.log(idade)
console.log(`O nome ${nome} e idade ${idade} anos`)

