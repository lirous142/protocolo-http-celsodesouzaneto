import http from "http"

const server = http.createServer((request, response) =>{
    console.log(request.method, request.url)
    const content = {"content-type": "text/plain; charset=utf-8"}
    const url = new URL (request.url, "http://localhost:3000")
    const caminho = url.pathname

    if (request.url == "/") {
        response.writeHead(200, content)
        response.end("funfando")
    }
    else if (request.url == "/sobre") {
        response.writeHead(200, content)
        response.end("pagina sobre")
    }
    else if (request.url == "/antigo") {
        response.writeHead(301, {location: "/sobre"})
        response.end()
    }
    else if (caminho === "/busca") {
        const termo = url.searchParams.get("termo")
    
        if (termo) {
            response.writeHead(200, content)
            response.end(`buscou por: ${termo}`)
        } 
        else {
            response.writeHead(400, content)
            response.end("termo é obrigado, nada encontrado")
        }
    }
    else if (caminho === "/admin") {
        response.writeHead (403, content)
        response.end("acesso negado")
    }
    else if (caminho === "/contato") {
        if (request.method === "GET") {
            response.writeHead(200, content)
            response.end ("pagina contato")
        } 
        else {
            response.writeHead(405, {...content, allow: "GET"})
            response.end("não permitido")
        }
    }
    else {
        response.writeHead(404, content)
        response.end("erro 404, nada encontrado")
    }
})

    server.listen(3000, () => {
        console.log(`Servidor rodando em http://localhost:${3000}`)
    })