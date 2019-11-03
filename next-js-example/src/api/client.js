import { createClient, createCache } from 'react-fetching-library';

import { requestHostInterceptor } from 'api/interceptors/requestHostInterceptor';
import { requestAuthInterceptor } from 'api/interceptors/requestAuthInterceptor';

const cache = createCache(
  action => {
    return action.method === 'GET';
  },
  response => {
    return new Date().getTime() - response.timestamp < 100000;
  },
);

export const createApiClient = authService =>
  createClient({
    requestInterceptors: [
      requestHostInterceptor('https://api.icreatoreu.now.sh/api'),
      requestAuthInterceptor(authService.getToken),
    ],
    cacheProvider: cache,
  });
