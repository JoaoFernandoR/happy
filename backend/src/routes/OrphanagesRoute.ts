import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'
// controllers
import { createOrphanage, listOrphanages, getOneOrphanage } from '../controllers/orphanagesController'

const router = Router()
const upload = multer(uploadConfig)

// orphanages
router.route('/')
.get(listOrphanages)
.post(upload.array('images'),createOrphanage)

router.route('/:id').get(getOneOrphanage)

export default router