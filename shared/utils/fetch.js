import axios from 'axios';
import { config } from 'server/common/config'

import { isServer } from './helpers';

export const fetch = async ({ serverSide = false, ...props }) => {
  if (isServer() && !serverSide) return false;
  try {
    return await axios({
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
