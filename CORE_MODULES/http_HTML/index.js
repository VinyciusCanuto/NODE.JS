
const http = require('node:http')
const PORT = 3333

// A cada atualização, sempre tem que parar o servidor e dar o node + nome do arquivo
// é como se fosse uma foto que o node tira-se, ou seja, sempre pare e inicie novamente a cada atualização

const server = http.createServer((request, response) =>{
    if(request.url === '/'){
        response.writeHead(200, {"Content-type" : "text/html"})
        response.write("<meta charset= utf8>")
        response.write('<h1>Home Page </h1>')
        response.write('<p>Bem vindo a página inicial</p>')
        response.end()
    }else if(request.url === '/sobre') {
        response.writeHead(200, {"Content-type" : "text/html"})
        response.write("<meta charset= utf8>")
        response.write('<h1>Page about</h1>')
        response.write('<p>Bem vindo a página inicial</p>')
        response.end()
    }else{
        response.writeHead(404, {"Content-type" : "text/html"})
        response.write('<h1>Página não encontrada</h1>')
        response.end()

    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT}`)
})



