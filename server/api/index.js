import express from 'express'

import { categoriesRoute } from './categories/route'
import { bannersRoute } from './banners/route'
import { adminRoute } from './admin/route'
import { tinyRoute } from './tiny/tinyRoute'
import { articleRoute } from './article/articleRoute'

const api = express.Router()

api.use('/categories', categoriesRoute)
api.use('/banners', bannersRoute)
api.use('/admin', adminRoute)
api.use('/upload/tiny', tinyRoute)
api.use('/article', articleRoute)


export default api