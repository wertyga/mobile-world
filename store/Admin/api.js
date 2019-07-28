import { fetch } from 'shared/utils'

export const auth = (data) => fetch({
  method: 'post',
  url: '/api/admin/auth',
  data,
})

export const checkSession = () => fetch({
  method: 'get',
  url: '/api/admin/check-session',
})

export const uploadArticleImage = (data) => fetch({
  method: 'post',
  url: '/api/upload/tiny/image',
  data,
})