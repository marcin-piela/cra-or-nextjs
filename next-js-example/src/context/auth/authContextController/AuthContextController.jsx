import React, { useReducer, useEffect } from 'react';
import decode from 'jwt-decode';

import { AuthDispatchContext, AuthStateContext } from '../authContext/AuthContext';
import { authReducer, SET_AUTHORIZED, SET_UNAUTHORIZED } from '../authReducer/authReducer';

export const AuthContextController = ({ authService, children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthorized: !!authService.getToken(),
    isAuthorizing: true,
    token: authService.getToken(),
  });

  useEffect(() => {
    try {
      authService.setToken(state.token);

      const decodedToken = decode(state.token);

      if (decodedToken) {
        return dispatch({
          type: SET_AUTHORIZED,
          decodedToken,
        });
      }

      throw new Error('User is unauthorized');
    } catch (error) {
      return dispatch({
        type: SET_UNAUTHORIZED,
      });
    }
  }, [authService, state.token]);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
