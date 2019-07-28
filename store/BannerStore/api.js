import { fetch } from 'shared/utils'

export const getBanners = (types) => (
  fetch({
    serverSide: true,
    method: 'get',
    url: '/api/banners',
    params: {
      types,
    },
  })
);