import { Capacitor } from '@capacitor/core';
import localforage from 'localforage';
import { Storage } from '@ionic/storage';
import { UnifiedStorage } from './types';

export async function initHybridStorage(): Promise<UnifiedStorage> {
  const isNative = Capacitor.isNativePlatform();

  if (isNative) {
    const nativeStorage = new Storage({
      name: '__mydb',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage'],
    });

    await nativeStorage.create();

    return {
      getItem: (key) => nativeStorage.get(key),
      setItem: (key, value) => nativeStorage.set(key, value),
      removeItem: (key) => nativeStorage.remove(key), 
    };
  } else {
    localforage.config({
      name: '__mydb',
      storeName: 'app_storage',
      driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
    });

    return {
      getItem: (key) => localforage.getItem(key),
      setItem: (key, value) => localforage.setItem(key, value).then(() => void 0),
      removeItem: (key) => localforage.removeItem(key),
    };
  }
}