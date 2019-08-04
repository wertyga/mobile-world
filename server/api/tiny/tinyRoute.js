import express from 'express'
import { handleBlob } from '../upload/handleBlob';
import { config } from 'server/common/config'

import { saveArticle } from './saveArticle'

export const tinyRoute = express.Router()

tinyRoute.post('/image', async (req, res) => {
  const { uploadPath: { articleImagesPath } } = config
  await handleBlob({
    req,
    uploadPath: articleImagesPath,
    onError: (e) => res.status(500).json({ error: err }),
    onSuccess: ({ filePaths }) => res.json({ filePath: filePaths[0] })
  })
})

tinyRoute.post('/article', async (req, res) => {
  const { uploadPath: { articleImagePreviewPath } } = config

  await handleBlob({
    req,
    uploadPath: articleImagePreviewPath,
    onError: (e) => res.status(500).json({ error: e.message }),
    onSuccess: async (data) => {
      try {
        const article = await saveArticle(data)
        res.json({ article });
      } catch (e) {
        res.status(400).json({ error: e.message })
      }
    },
  })
})