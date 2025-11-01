// Simple in-memory cache with TTL support
interface CacheItem<T> {
  value: T;
  expiry: number;
}

const cacheStore = new Map<string, CacheItem<any>>();

/**
 * Get cached data if not expired
 */
export function getCache<T>(key: string): T | null {
  const cached = cacheStore.get(key);
  if (!cached) return null;
  if (Date.now() > cached.expiry) {
    cacheStore.delete(key);
    return null;
  }
  return cached.value;
}

/**
 * Store data in cache
 */
export function setCache<T>(key: string, value: T, ttlSeconds = 300): void {
  cacheStore.set(key, {
    value,
    expiry: Date.now() + ttlSeconds * 1000,
  });
}

/**
 * Clear cache (optional for admin refresh)
 */
export function clearCache(key?: string): void {
  if (key) cacheStore.delete(key);
  else cacheStore.clear();
}
