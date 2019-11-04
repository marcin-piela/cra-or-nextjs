import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { SET_UNAUTHORIZED } from 'context/auth/authReducer/authReducer';
import { useAuthDispatch } from 'hooks';

export const Logout = () => {
  const authDispatch = useAuthDispatch();

  useEffect(() => {
    authDispatch({
      type: SET_UNAUTHORIZED,
    });
  }, [authDispatch]);

  return <Redirect to="/" />;
};
