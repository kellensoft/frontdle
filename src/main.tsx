import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from '@apollo/client';

import App from './App';
import { makeStore } from './universal/store';
import { apolloClient } from './apolloClient';

import { getGameFromPath } from './utils/getGameFromPath';

(async () => {
  const { store, persistor } = await makeStore(getGameFromPath(window.location.pathname));

  if (import.meta.env.DEV) {
    window.store = store;
    window.persistor = persistor;
  }

  const container = document.getElementById('root');
  const root = createRoot(container!);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        </ApolloProvider>
      </Provider>
    </React.StrictMode>
  );
})();