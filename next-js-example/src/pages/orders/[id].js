import React from 'react';

import { withProviders } from '../../hocs/withProviders';

import { createOrderDetailsAction } from 'api/actions';
import { OrderDetails } from 'app/orderDetails/OrderDetails';
import { Header } from 'core/header/Header';
import { Footer } from 'core/footer/Footer';

const OrderDetailsPage = ({ order }) => (
  <>
    <Header />
    <OrderDetails isLoading={order.loading} isError={order.error} data={order.payload} />
    <Footer />
  </>
);

OrderDetailsPage.getInitialProps = async ctx => {
  if (!ctx.authService.getToken()) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
  }

  const order = await ctx.client.query(createOrderDetailsAction(ctx.query.id));

  return { order };
};

export default withProviders(OrderDetailsPage);
