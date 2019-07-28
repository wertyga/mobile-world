import { fetch } from 'shared/utils'

export const getCategories = (pathname) => (
  fetch({
    serverSide: true,
    method: 'get',
    url: '/api/categories',
    params: {
      pathname,
    },
  })
)