import type { AppProps } from 'next/app';
import { wrapper } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persitedReducer } from '../redux/store';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps, router }: AppProps) {
  const store = createStore(persitedReducer);
  const persistor = persistStore(store);

  return (
    <PersistGate persistor={persistor}>
      {/* 핸드폰 화면에서 화면 확대 기능 없애기 */}
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
        <title>AI Teacher</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
