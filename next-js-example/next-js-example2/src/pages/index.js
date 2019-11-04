import React from 'react';

import { withProviders } from 'hocs/withProviders';
import { Home } from 'app/home/Home';
import { FeaturedPostsAction, OfferAction, NewsAction } from 'api/actions';

const HomePage = ({ featuredPosts, offer, news }) => {
  return <Home featuredPosts={featuredPosts} offer={offer} news={news} />;
};

HomePage.getInitialProps = async ({ client }) => {
  const featuredPosts = client.query(FeaturedPostsAction);
  const offer = client.query(OfferAction);
  const news = client.query(NewsAction);

  return {
    featuredPosts: await featuredPosts,
    offer: await offer,
    news: await news,
  };
};

export default withProviders(HomePage);
