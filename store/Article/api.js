import { fetch } from 'shared/utils'

export const fetchArticleList = () => fetch({
  method: 'get',
  url: '/api/article/list',
})

export const fetchArticle = (id) => fetch({
  method: 'get',
  url: '/api/article',
  params: {
    id,
  }
})