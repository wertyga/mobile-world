import express from 'express'

import { Article } from 'server/models'

export const articleRoute = express.Router()
const TEXT = {
  notFount: 'Статья не найдена',
}

articleRoute.get('/list', async (req, res) => {
  try {
    const articles = await Article.find({}, ['name'])

    res.json({ articles })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

articleRoute.get('/', async ({ query: { id } }, res) => {
  try {
    const article = await Article.findById(id)
    if (!article) {
      res.status(404).json(TEXT.notFount)
    }
    res.json({ article })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})
