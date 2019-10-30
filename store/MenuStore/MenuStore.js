import { observable } from 'mobx';
import { gfMainMenu, gfArticleStore } from 'goldfish';
import { getApiError } from 'shared/utils';

import * as api from './api'

export class MenuStore {
  @observable.ref menuList = [];
  @observable.ref menuArticles = [];
  @observable error;

  constructor(data = {}) {
    Object.assign(this, data);
  }

  register() {
    this.getArticles();
  }

  getList = async (pathname) => {
    try {
      const [{ data: { categories } }] = await api.getCategories(pathname);

      this.menuList = categories;
    } catch (e) {
      this.error = getApiError(e);
    }
  }

  prepareMenuItems = (items) => {
    return items.map(item => ({ ...item, href: item.isStatic ? `/static/${item.slug}` : `/${item.slug}` }))
  }

  setLocation = () => {
    const { history: { location: { pathname } } } = this.getRootStore();

    return this.menuList.find(item => item.href === pathname)
  }

  getArticles = async () => {
    const { getArticleList } = this.getRootStore().get('articleStore');

    try {
      this.menuArticles = await getArticleList(
        0,
        gfArticleStore.clientFetchFields,
        gfArticleStore.menuArticles,
      );
    } catch (e) {
      this.error = getApiError(e);
    }
  }
}