const http = require('http')
let request_counter = 0

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/studens':
            response.write('students')
            break
        case '/other':
            response.write('other')
            break
        case '/favicon.ico':
            request_counter--
            response.writeHead(200, {'Content-Type': '742751.png'})
            response.end
            break
        default:
            response.write('default')
    }

        request_counter++

    response.write('   ' + request_counter)
    
    response.end()
})

server.listen(3003)

