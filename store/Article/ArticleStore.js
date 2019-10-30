import { action, observable } from 'mobx';
import { getApiError } from 'shared/utils';
import { gfArticleStore } from 'goldfish'

import * as api from './api'

export class ArticleStore {
  @observable articleState;
  @observable articles = [];

  @observable topArticles = [];
  @observable latestArticles = [];

  @observable error;

  @action
  getArticleList = async (upToDate, fields, opts) => {
    try {
      const { data: { articles } } = await api.fetchArticleList(upToDate, fields, opts);

      return articles;
    } catch (e) {
      throw e;
    }
  }

  @action
  getTopArticles = async () => {
    try {
      this.topArticles = await this.getArticleList(
        0,
        gfArticleStore.clientFetchFields,
        gfArticleStore.topArticles,
      );
    } catch (e) {
      this.error = getApiError(e);
    }
  }

  @action
  getLatestArticles = async () => {
    try {
      this.latestArticles = await this.getArticleList(
        0,
        gfArticleStore.clientFetchFields,
        gfArticleStore.latestArticles,
      );
    } catch (e) {
      this.error = getApiError(e);
    }
  }
}