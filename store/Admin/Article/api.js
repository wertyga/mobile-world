import { fetch } from 'shared/utils'

export const uploadArticleImage = (data) => fetch({
  method: 'post',
  url: '/api/upload/tiny/image',
  data,
})

export const uploadArticle = (data) => fetch({
  method: 'post',
  url: '/api/upload/tiny/article',
  data,
})