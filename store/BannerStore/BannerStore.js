import * as api from './api'

export class BannerStore {
  getBanners = async (types = []) => {
    if (!types.length) return [];
    // if (!Array.isArray(types)) types = [types]
    try {
      const { data: { banners } } = await api.getBanners(types)
    } catch (e) {}
  }
}