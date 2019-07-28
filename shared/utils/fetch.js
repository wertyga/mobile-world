import axios from 'axios';
import _get from 'lodash/get';
import { config } from 'server/common/config'

import { isServer } from './helpers';

export const fetch = async ({ serverSide = false, url, ...props }) => {
  if (isServer() && !serverSide) return false;
  // 'Cache-Control': `max-age=${ONE_DAY_IN_SEC}`,
  try {
    return await axios({
      url: `http://localhost:${config.PORT}${url}`,
      ...props,
      headers: {
        'Cache-Control': 'no-cache',
        ...props.headers,
      },
      timeout: isServer() ? process.env.SERVER_REQUEST_TIMEOUT : 0,
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
