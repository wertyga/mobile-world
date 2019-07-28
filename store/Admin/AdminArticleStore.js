import { observable } from 'mobx'
import _get from 'lodash/get'

import * as api from './api'

export class AdminArticleStore {
  @observable error;

  uploadArticleImage = async (Blob, success, failure) => {
    const formData = new FormData();
    formData.append(Blob.filename(), Blob.blob());

    try {
      const { data: { filePath } } = await api.uploadArticleImage(formData)

      success(filePath)
    } catch(e) {
      this.error = _get(e, 'response.data.error', e.message)
      failure(this.error)
    }
  }
}