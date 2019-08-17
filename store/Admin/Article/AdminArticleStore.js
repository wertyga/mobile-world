import { observable, action } from 'mobx'
import _get from 'lodash/get'
import { gfArticleStore as TEXT } from 'goldfish/index'

import * as api from './api'

export class AdminArticleStore {
  @observable error;
  @observable message = '';
  @observable articleState;
  articles = [];

  @action
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

  @action
  handleArticleUpload = async (data) => {
    try {
      const isSomeNotFilled = Object.entries(data).find(([key, value]) => !value)
      if (isSomeNotFilled && isSomeNotFilled[0] !== 'id') throw new Error(TEXT.fillError)

      const Blob = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (key === 'id' && !value) {
          return;
        }
        Blob.append(key, key === 'file' && !value.size ? value.name : value)
      })

      this.articleState = 'pending'

      !data.id ?
        await api.uploadArticle(Blob) :
        await api.updateArticle(Blob)

      this.message = TEXT.successSaved
      this.articleState = 'fulfilled'
    } catch (e) {
      this.error = _get(e, 'response.data.error', e.message);
      this.articleState = 'rejected'
    }
  }

  @action
  handleArticleDelete = async (id) => {
    try {
      this.articleState = 'pending'

      await api.deleteArticle(id)

      this.articleState = 'fulfilled'
    } catch (e) {
      this.error = _get(e, 'response.data.error', e.message);
      this.articleState = 'rejected'
    }
  }
}