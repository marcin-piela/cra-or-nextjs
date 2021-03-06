import React from 'react';
import Router from 'next/router';

import { withProviders } from 'hocs/withProviders';
import { OrdersAction } from 'api/actions';
import { Orders } from 'app/orders/Orders';
import { Header } from 'core/header/Header';
import { Footer } from 'core/footer/Footer';

const OrdersPage = ({ orders }) => (
  <>
    <Header />
    <Orders isLoading={orders.loading} isError={orders.error} orders={orders.payload} />
    <Footer />
  </>
);

OrdersPage.getInitialProps = async ctx => {
  if (!ctx.authService.getToken()) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end();
    } else {
      Router.push('/')
    }
  }

  const orders = await ctx.client.query(OrdersAction);

  return { orders };
};

export default withProviders(OrdersPage);
