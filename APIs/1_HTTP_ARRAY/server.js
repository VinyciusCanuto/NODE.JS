//Desenvolvimento de uma pequena api, utilizando javascript puro no node.js
// utlizando no json type : module
import { on } from 'node:events'
import http from 'node:http'
import { userInfo } from 'node:os'

const PORT = 3333
// Métodos: GET, POST, PUT, PATH , DELETE
/**
 * REQUISIÇÃO
 * 1. corpo da requisição (request.body) (POST)
 * 2. Parametro de busca (Search PARAMS, QUERY PARAMS) http://localhost:3333/users/2 (GET)
 * 3. Parâmetros de ROTA (ROUTE PARAMS) - http://localhost:3333/users/1 (PUT, PATH, DELETE)
 */

const users = []
const server = http.createServer((request, response)=>{
    const {method, url} = request

    if(url === '/users' && method === "GET"){//Buscar todos os usuários
        response.setHeader('Content-type', 'application/json')
        response.end(JSON.stringify(users)) // transforma os dados do array em json

    }else if(url.startsWith('/users/') && method === 'GET'){// Buscar um único usuário
        const userId = url.split('/')[2]
        const user = users.find((user) => user.id == userId) //console.log(user) - console.log(user) para aparecer no terminal os usuario cadastrado e selecionar por ID usando o thunder client

        if(user){
            response.setHeader("Content-type", "application/json")
            response.end(JSON.stringify(user))
        }else{
            response.writeHead(404, {"Content-type" : "application/json"})
            response.end(JSON.stringify({message: "Usuário não encontrado"}))
        } 
    }else if(url === '/users' && method === "POST"){// Cadastrar um usuário
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk.toString()
        })
        request.on('end', ()=>{
            const novoUsuario = JSON.parse(body) // todas as informações vão ser passadas em json
            novoUsuario.id = users.length + 1 // Quando cadastrar um usuario ele vai mudando o id de cada pessoa cadastrado
            users.push(novoUsuario)
            response.writeHead(201, {'Content-type' : 'application/json'})
            response.end(JSON.stringify(novoUsuario)) //
        })
    }else if(url.startsWith("/users/") && method === "PUT"){// Atualizar um usuário
        const userId = url.split("/") [2]

        let body = ""
        request.on("data", (chunk) => {
            body += chunk.toString()
        })
        request.on('end', ()=>{
            const updateUser = JSON.parse(body)
            const index = users.findIndex((user) => user.id == userId)
            if(index !== -1){ //Atualizar
                users[index] = {...users[index], updateUser} // para manter o histórico, se nao quiser manter o historico so colocar o updateUser
                response.setHeader('Content-type', 'application/json')
                response.end(JSON.stringify(users[index]))          
            }else{ //Retornar um erro 
                response.writeHead(404, {"Content-type" : "application/json"})
                response.end(JSON.stringify({message: "Erro ao tentar atualiar esse usuário"}))
            }
        })


        const user = users.find((user) => user.id == userId)


    }else if(url.startsWith("/users/") && method === "DELETE"){// Deletar um usuário
        const userId = url.split("/")[2]
        const index = users.findIndex((user) => user.id == userId)
        if(index !== -1) {
            users.splice(index,1)
            response.setHeader("Content-type", "application/json")
            response.end(JSON.stringify({message:"Usuário excluido"}))
        }else{
            response.writeHead(404, { "Content-type": "application/json"})
            response.end(JSON.stringify({message: "Erro ao tentar excluir o usuário"}))
        }
    }else {// Recurso não encontrado
        
    }
}) 

server.listen(PORT, ()=>{
    console.log(`Servidor ON ${PORT}`)
})

// arquivo sobre como criar um servidor com node.js


