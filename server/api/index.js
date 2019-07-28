import express from 'express'

import { categoriesRoute } from './categories/route'
import { bannersRoute } from './banners/route'
import { adminRoute } from './admin/route'
import { tinyRouteImage } from './upload/upload-tiny-images'

const api = express.Router()

api.use('/categories', categoriesRoute)
api.use('/banners', bannersRoute)
api.use('/admin', adminRoute)
api.use('/upload/tiny', tinyRouteImage)


export default api