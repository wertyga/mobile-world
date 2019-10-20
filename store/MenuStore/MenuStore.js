import { observable } from 'mobx';
import { gfBanners, gfArticleStore } from 'goldfish';

import * as api from './api'

export class MenuStore {
  @observable.ref menuList = []

  constructor(data = {}) {
    Object.assign(this, data);
  }

  register() {
    const { getArticleList } = this.getRootStore().get('articleStore');

    const articleOpts = {
      destination: gfArticleStore.menuArticles,
    }
    getArticleList(0, gfArticleStore.clientFetchFields, articleOpts)
  }

  getList = async (pathname) => {
    try {
      const { getBanners } = this.getRootStore().get('bannerStore')
      const [{ data: { categories } }] = await Promise.all([
        api.getCategories(pathname),
        getBanners(gfBanners.menu)
      ]);
      this.menuList = categories;
    } catch (e) {
      console.error('MenuStore.getList: ', e)
    }
  }

  prepareMenuItems = (items) => {
    return items.map(item => ({ ...item, href: item.isStatic ? `/static/${item.slug}` : `/${item.slug}` }))
  }

  setLocation = () => {
    const { history: { location: { pathname } } } = this.getRootStore();

    return this.menuList.find(item => item.href === pathname)
  }
}