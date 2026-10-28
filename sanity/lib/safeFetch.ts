/**
 * Wraps a Sanity `client.fetch` call so a Sanity outage/error never crashes
 * the page — logs the error server-side and returns the given fallback
 * instead. Used by every Server Component page that reads from Sanity.
 */
export async function safeFetch<T>(
  fetchFn: () => Promise<T>,
  fallback: T,
  label: string,
): Promise<T> {
  try {
    return await fetchFn();
  } catch (error) {
    console.error(`Failed to fetch "${label}" from Sanity, using fallback content:`, error);
    return fallback;
  }
}
