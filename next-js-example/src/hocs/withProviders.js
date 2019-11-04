import React from 'react';
import { ClientContextProvider } from 'react-fetching-library';

import { authServiceFactory } from 'auth/auth';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { createApiClient } from 'api/client';

let providersData;

const getOrInitializeClient = initAuthService => {
  // Always create new authService and api client if server, otherwise it should be shared between requests
  if (typeof window === 'undefined') {
    const authService = initAuthService || authServiceFactory();

    return {
      client: createApiClient(authService),
      authService,
    };
  }

  // Create if unavailable on the client and set it on the window object
  if (!providersData) {
    const authService = authServiceFactory();

    providersData = {
      client: createApiClient(authService),
      authService,
    };

    return providersData;
  }

  return providersData;
};

export const withProviders = PageComponent => {
  const WithProviders = ({ initAuthService, cacheItems, ...props }) => {
    const { client, authService } = getOrInitializeClient(initAuthService);
    client.cache.setItems(cacheItems);

    return (
      <AuthContextController authService={authService}>
        <ClientContextProvider client={client}>
          <PageComponent {...props} />
        </ClientContextProvider>
      </AuthContextController>
    );
  };

  WithProviders.getInitialProps = async context => {
    const authService = authServiceFactory(context);
    const { client } = getOrInitializeClient(authService);

    // Provide client and authService to getInitialProps of pages
    context.client = client;
    context.authService = authService;

    // Run getInitialProps from HOCed PageComponent
    const pageProps =
      typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {};

    // Pass props to PageComponent
    return {
      initAuthService: authService,
      cacheItems: client.cache.getItems(),
      ...pageProps,
    };
  };

  return WithProviders;
};
