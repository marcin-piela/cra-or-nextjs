import React from 'react';

import { Header } from 'core/header/Header';
import { Footer } from 'core/footer/Footer';
import { Offer } from './offer/Offer';
import { Posts } from './posts/Posts';
import { Hero } from './hero/Hero';
import { Banner } from './banner/Banner';
import { Spinner } from 'ui/spinner/Spinner';

export const Home = ({ featuredPosts, offer, news }) => (
  <>
    <Header />
    <Banner />

    {featuredPosts.loading && <Spinner />}
    {featuredPosts.payload && (
      <>
        <Hero
          title="Featured posts"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque gravida turpis. Praesent in egestas massa. Integer tincidunt sodales lectus, in hendrerit massa."
        />
        <Posts posts={featuredPosts.payload} />
      </>
    )}

    {offer.loading && <Spinner />}
    {offer.payload && (
      <>
        <Hero
          title="Our offer"
          description="Aliquam efficitur ultrices nisi, ut dignissim nisl venenatis in. Etiam in fermentum turpis, eu laoreet mi. Donec eleifend lacus sit amet ex fringilla vestibulum. "
        />
        <Offer items={offer.payload} />
      </>
    )}

    {news.loading && <Spinner />}
    {news.payload && (
      <>
        <Hero
          title="What's new"
          description="Proin laoreet, sem vitae malesuada ultrices, risus nulla pharetra arcu, vitae posuere nisi felis cursus augue. Aenean elementum orci eu neque aliquam, quis tincidunt orci mollis."
        />
        <Posts posts={news.payload} />
      </>
    )}

    <Footer />
  </>
);
