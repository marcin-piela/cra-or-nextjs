import React from 'react';
import { useMutation } from 'react-fetching-library';
import Router from 'next/router';

import { withProviders } from 'hocs/withProviders';
import { createLoginAction } from 'api/actions';
import { Login } from 'app/login/Login';

const LoginPage = () => {
  const { mutate } = useMutation(createLoginAction);

  return <Login onSubmit={mutate} />;
};

LoginPage.getInitialProps = async ctx => {
  if (ctx.authService.getToken()) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/orders' });
      ctx.res.end();
    } else {
      Router.push('/orders');
    }
  }

  return {};
};

export default withProviders(LoginPage);
