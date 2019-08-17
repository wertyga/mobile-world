import { useStaticRendering } from 'mobx-react'
import { observable } from 'mobx'

const isServer = !process.browser
useStaticRendering(isServer)

import { ExecContextStore } from 'store/ExecutionContext/executionContext'
import { MenuStore } from 'store/MenuStore/MenuStore'
import { BannerStore } from 'store/BannerStore/BannerStore'
import { AdminStore } from 'store/Admin/AdminStore'
import { AdminArticleStore } from 'store/Admin/Article/AdminArticleStore'
import { ArticleStore } from 'store/Article/ArticleStore'
import { ArticleViewStore } from 'store/Article/ArticleViewStore'

class RootStore {
  stores = new Map();

  @observable.ref location;

  setStore = (storeName, store) => {
    store.getRootStore = () => this;
    this.stores.set(storeName, store);
    return this;
  }

  get(storeName) {
    return this.stores.get(storeName);
  }

  register() {
    this.stores.forEach((store) => {
      store.register && store.register(this);
    });
  }

  toProps() {
    const props = { rootStore: this };
    this.stores.forEach((value, key) => {
      props[key] = value;
    });
    return props;
  }

  set history(history) {
    this.pHistory = history;
  }

  get history() {
    return this.pHistory;
  }
}

const STORES = {
  ExecContextStore,
  MenuStore,
  BannerStore,
  AdminStore,
  AdminArticleStore,
  ArticleStore,
  ArticleViewStore,
};

let store = null;

export function initializeStore(initialData = {}, history) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer || store === null) {
    const rootStore = new RootStore();
    rootStore.history = history;

    Object.entries(STORES).forEach(([key, StoreClass]) => {
      const storeName = `${key.charAt(0).toLocaleLowerCase()}${key.slice(1)}`;
      const instance = new StoreClass(initialData[storeName] || {});
      rootStore.setStore(storeName, instance);
    });

    const initRootStore = rootStore.register.bind(rootStore);
    initRootStore();

    if (isServer) return rootStore;
    if (store === null) store = rootStore;
  }
  return store;
}
