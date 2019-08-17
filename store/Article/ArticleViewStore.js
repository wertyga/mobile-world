import { observable, action } from 'mobx'
import _get from 'lodash/get'

import * as api from './api'

export class ArticleViewStore {
  @observable articleViewState;
  articleView = {};
  error;

  @action
  getArticle = async (id) => {
    try {
      this.articleViewState = 'pending'

      const { data: { article } } = await api.fetchArticle(id)

      this.articleView = article

      this.articleViewState = 'fulfilled'
    } catch (e) {
      this.error = _get(e, 'response.data.error', e.message)
      this.articleViewState = 'rejected'
    }
  }
}