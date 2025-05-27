import { initHybridStorage } from './storage';
import type { UnifiedStorage } from './types';

let adapter: UnifiedStorage | null = null;

export async function getPersistStorage(): Promise<UnifiedStorage> {
  if (!adapter) {
    adapter = await initHybridStorage();
  }
  return adapter;
}