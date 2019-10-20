import { fetch } from 'shared/utils'

export const fetchArticleList = (upToDate, fields = '', opts) => {
  return fetch({
    serverSide: true,
    method: 'get',
    url: `${process.env.API_GATEWAY}/api/article/list`,
    params: {
      upToDate,
      fields,
      ...opts,
    },
  })
}

export const fetchArticle = (id) => fetch({
  method: 'get',
  url: `${process.env.API_GATEWAY}/api/article`,
  params: {
    id,
  }
})