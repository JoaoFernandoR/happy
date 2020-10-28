import express from 'express'
import path from 'path'
import errorHandler from './errors/handler'
import cors from 'cors'
// Rotas
import OrphanagesRoute from './routes/OrphanagesRoute'

import './database/connection'

const server = express()

server.use(cors())
server.use(express.json())
server.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

//Rotas
server.use('/orphanages', OrphanagesRoute)

server.use(errorHandler)

server.listen(3333, () => console.log('Conectado à porta 3333...'))



