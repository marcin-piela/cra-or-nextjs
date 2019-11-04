export const FeaturedPostsAction = {
  method: 'GET',
  endpoint: '/featured-posts',
};

export const OfferAction = {
  method: 'GET',
  endpoint: '/offer',
};

export const OrdersAction = {
  method: 'GET',
  endpoint: '/orders',
};

export const createOrderDetailsAction = uid => ({
  method: 'GET',
  endpoint: `/orders/${uid}`,
});

export const NewsAction = {
  method: 'GET',
  endpoint: '/news',
};

export const createLoginAction = body => ({
  method: 'POST',
  endpoint: '/login',
  body,
});
