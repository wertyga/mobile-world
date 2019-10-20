import { fetch } from 'shared/utils'

export const getBanners = (types) => (
  fetch({
    serverSide: true,
    method: 'get',
    url: `${process.env.API_GATEWAY}/api/banners`,
    params: {
      types,
    },
  })
);