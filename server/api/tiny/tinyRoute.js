import express from 'express'
import { handleBlob } from '../upload/handleBlob';
import { config } from 'server/common/config'

import { saveArticle } from './saveArticle'
import { Article } from 'server/models'

import { findContentImages } from './helpers';

const TEXT = {
  noSuchArticle: 'No such article',
};

export const tinyRoute = express.Router()

const postPutHandle = async (req, res) => {
  const {uploadPath: {articleImagePreviewPath}} = config

  await handleBlob({
    req,
    uploadPath: articleImagePreviewPath,
    onError: (e) => res.status(500).json({error: e.message}),
    onSuccess: async (data) => {
      try {
        const article = await saveArticle(data)
        res.json({ article });
      } catch (e) {
        res.status(400).json({ error: e.message })
      }
    },
  })
}

tinyRoute.post('/image', async (req, res) => {
  const { uploadPath: { articleImagesPath } } = config
  await handleBlob({
    req,
    uploadPath: articleImagesPath,
    onError: (e) => res.status(500).json({ error: err }),
    onSuccess: ({ filePaths }) => res.json({ filePath: filePaths[0] })
  })
})

tinyRoute.post('/article', postPutHandle)

tinyRoute.put('/article', postPutHandle)

tinyRoute.delete('/article', async ({ body: { id } }, res) => {
  try {
    const article = await Article.findById(id);
    if (!article) throw new Error(TEXT.noSuchArticle);

    const { content, previewImage } = article;

    await Promise.all([
      findContentImages(content, previewImage),
      article.remove(),
    ]);

    res.json(`success deleted ${id}`);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
})