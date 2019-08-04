import multiparty from 'multiparty'
import shell from 'shelljs'
import path from 'path'
import fs from 'fs'
import shortid from 'short-id'

export const handleBlob = async ({ req, uploadPath, onError, onSuccess }) => {
  const form = new multiparty.Form({ uploadDir: uploadPath })

  form.parse(req, (err, fields, files) => {
    if (!err) {
      const filePaths = Object.values(files).map(([{ path }]) => path.replace(process.cwd(), ''));
      onSuccess({ filePaths, fields })
    } else {
      onError(err);
    }
  })
}