import express from 'express'
import multiparty from 'multiparty'
import shell from 'shelljs'
import fs from 'fs'
import shortid from 'short-id'
import { config } from 'server/common/config'
import path from 'path'

export const tinyRouteImage = express.Router()

tinyRouteImage.post('/image', async (req, res) => {
  const form = new multiparty.Form()

  let filePath;
  form.on('part', async part => {
    const { filename } = part
    const extFile = filename.split('.').slice(-1)[0];
    const { uploadPath: { articleImages } } = config
    filePath = path.join(articleImages, `${shortid.generate()}.${extFile}`);

    try {
      await fs.statSync(articleImages);
    } catch(err) {
      if(err.code === 'ENOENT') {
        await shell.mkdir('-p', articleImages);
      } else {
        part.resume()
        res.status(500).json({ error: err.message });
      }
    }

    const ws = fs.createWriteStream(filePath)
    part.pipe(ws)

    ws.on('error', (err) => {
      form.emit('error', err)
      part.resume()
    })
  })

  form.on('finish', () => {
    res.json({ filePath: filePath.replace(process.cwd(), '') })
  })

  form.on('error', (err) => {
    res.status(500).json({ error: err });
  });

  form.parse(req)
})