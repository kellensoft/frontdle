import { AppStore } from './universal/store';
import type { Persistor } from 'redux-persist';

declare global {
  interface Window {
    store?: AppStore;
    persistor?: Persistor;
  }
}
