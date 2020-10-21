import express from 'express'

const server = express()

server.get('/', (request, response, next) => {

    return response.status(200).json({
        message: 'success'
    })

})


server.listen(3333, () => console.log('Conectado à porta 3333...'))