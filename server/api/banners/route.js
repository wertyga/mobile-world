import express from 'express'

export const bannersRoute = express.Router()

bannersRoute.get('/', async ({ query: { types } }, res) => {
  res.end()
})