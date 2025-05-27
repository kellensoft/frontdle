import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { getPersistStorage } from './persistStorage';
import settingsReducer from './slices/settings';
import dailyReducer from './slices/daily';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  daily: dailyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export async function makeStore(game: string) {
  const storageEngine = await getPersistStorage();

  const persistConfig = {
    key: `root-${game}`, 
    version: 1,
    storage: storageEngine,
    whitelist: ['settings', 'daily'], 
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefault) =>
      getDefault({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = persistStore(store);
  return { store, persistor };
}

export type AppDispatch = ReturnType<typeof makeStore> extends Promise<infer R>
  ? R extends { store: infer S }
    ? S extends { dispatch: infer D }
      ? D
      : never
    : never
  : never;

export type AppStore = ReturnType<typeof makeStore> extends Promise<infer R>
  ? R extends { store: infer S }
    ? S
    : never
  : never;
