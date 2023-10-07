import RootLayout from '@/components/RootLayout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "react-redux";
import { persistor, store } from '@/store/store';
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SessionProvider>
          
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
  
  
}
