import nookies from 'nookies';

export const authServiceFactory = ctx => {
  return {
    isAuthorized: () => true,
    getToken: () => nookies.get(ctx).token,
    setToken: token => nookies.set(ctx, 'token', token),
  };
};
