import {Request, Response, NextFunction} from 'express'
import { getRepository } from 'typeorm'
import OrphanageView from '../views/orphanages_view'
import Orphanage from '../models/Orphanage'
import * as Yup from 'yup'

export const createOrphanage = async (request:Request, response:Response, next:NextFunction) => {
    try {
        const {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = request.body
    
        const requestImages = request.files as Express.Multer.File[]
        const images = requestImages.map(image => {
            return { path: image.filename}
          })
          
        const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required("Campo de 'about' orbrigatório").max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean(),
            images: Yup.array(
              Yup.object().shape({
                path: Yup.string().required(),
              })
            ).required().min(1),
          });
          
          const orphanageRepository = getRepository(Orphanage)  
          
          const orphanage = orphanageRepository.create({ 
              name, 
              latitude, 
              longitude, 
              about, 
              instructions, 
              opening_hours, 
              open_on_weekends: open_on_weekends === 'true',
              images
            })
            
            await schema.validate(orphanage, {abortEarly: false})
            
            await orphanageRepository.save(orphanage)

    
        return response.status(201).json({
            status: 'success',
            data: orphanage
        })

    } catch(err) {
        return response.status(400).json({
            status: 'fail',
            message: err.message,
            code: err.code,
            name: err.name 
        })
        
    }

    
}

export const listOrphanages = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const orphanageRepository = getRepository(Orphanage)

        const result = await orphanageRepository.find({
            relations: ['images']
        })

        return response.status(200).json({
            status: 'success',
            totalResults: result.length,
            data: OrphanageView.renderMany(result)
        })


    } catch (err) {

        return response.status(400).json({
            status: 'fail',
            message: err.message,
            code: err.code
        })

    }
}

export const getOneOrphanage = async (request: Request, response: Response, next: NextFunction) => {
    try {

        const orphanageRepository = getRepository(Orphanage)

        const result = await orphanageRepository.findOneOrFail(request.params.id, {
            relations: ['images']
        })

        return response.status(200).json({
            status: 'success',
            data: OrphanageView.render(result)
        })


    } catch (err) {

        return response.status(400).json({
            status: 'fail',
            message: `There is no orphanage with this iD ${request.params.id}`,
        })

    }
}