import Router from 'next/router';

import { withProviders } from 'hocs/withProviders';

const LogoutPage = () => null;

LogoutPage.getInitialProps = async ctx => {
  ctx.authService.setToken('');

  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: '/',
    });
    ctx.res.end();
  } else {
    Router.push('/');
  }

  return {};
};

export default withProviders(LogoutPage);
