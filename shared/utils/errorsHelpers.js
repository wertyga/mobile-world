import _get from 'lodash/get';

export const getApiError = (e = {}) => _get('response.data.error', e.message);
