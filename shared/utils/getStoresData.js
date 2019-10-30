const getMenu = async ({ url }, rootStore) => {
  const { getList } = rootStore.get('menuStore')
  await getList(url)
}

export const getStoresData = async (req, rootStore) => {
  await Promise.all([
    getMenu(req, rootStore),
  ])
}