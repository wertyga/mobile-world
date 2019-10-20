import { fetch } from 'shared/utils'

export const getCategories = (pathname) => (
  fetch({
    serverSide: true,
    method: 'get',
    url: `${process.env.API_GATEWAY}/api/categories`,
    params: {
      pathname,
    },
  })
)