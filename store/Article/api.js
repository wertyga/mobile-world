import { fetch } from 'shared/utils'

export const fetchArticleList = (upToDate) => fetch({
  method: 'get',
  url: '/api/article/list',
  params: {
    upToDate,
  },
})

export const fetchArticle = (id) => fetch({
  method: 'get',
  url: '/api/article',
  params: {
    id,
  }
})