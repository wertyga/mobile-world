const getMenu = async ({ url }, rootStore) => {
  const { getList } = rootStore.get('menuStore')
  await getList(url)
}

const getMenuArticles = async(req, rootStore) => {
  const { getArticleList } = rootStore.get('articleStore');

  await getArticleList(null, {}, { limit: 3 })
}

export const getStoresData = async (req, rootStore) => {
  await Promise.all([
    getMenu(req, rootStore),
    // getMenuArticles(req, rootStore),
  ])
}