import React from 'react';
import { useMutation } from 'react-fetching-library';

import { withProviders } from 'hocs/withProviders';
import { createLoginAction } from 'api/actions';
import { Login } from 'app/login/Login';

const LoginPage = () => {
  const { mutate } = useMutation(createLoginAction);

  return <Login onSubmit={mutate} />;
};

LoginPage.getInitialProps = async ctx => {
  if (ctx.authService.getToken()) {
    ctx.res.writeHead(302, { Location: '/orders' });
    ctx.res.end();
  }

  return {};
};

export default withProviders(LoginPage);
