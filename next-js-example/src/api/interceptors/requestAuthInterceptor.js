export const requestAuthInterceptor = getToken => () => async action => {
  if (getToken()) {
    return {
      ...action,
      headers: {
        authorization: getToken(),
      },
    };
  }

  return action;
};
