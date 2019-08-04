import { action, observable } from 'mobx'
import _get from 'lodash/get'

import * as api from './api'

export class ArticleStore {
  @observable articleState;
  articles = [];

  @action
    getArticleList = async () => {
      try {
        this.articleState = 'pending'

        const { data: { articles } } = await api.fetchArticleList()

        this.articles = articles
        this.articleState = 'fulfilled'
      } catch (e) {
        this.error = _get(e, 'response.data.error', e.message);
        this.articleState = 'rejected'
      }
    }
}