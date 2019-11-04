import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuthState, useAuthDispatch } from 'hooks';
import { SET_TOKEN } from 'context/auth/authReducer/authReducer';
import useStyles from './Login.styles';
import { LoginForm } from './loginForm/LoginForm';

export const Login = ({ onSubmit }) => {
  const classes = useStyles();
  const { isAuthorized } = useAuthState();
  const dispatch = useAuthDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isAuthorized) {
      router.push('/orders');
    }
  }, [isAuthorized, router]);

  const handleSubmit = async body => {
    const { payload, error } = await onSubmit({
      username: body.username,
      password: body.password,
    });

    if (!error && payload) {
      return dispatch({
        type: SET_TOKEN,
        token: payload.token,
      });
    }

    return {
      id: 'Bad credentials',
    };
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftSide} />
      <div className={classes.rightSide}>
        <div className={classes.formWrapper}>
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
