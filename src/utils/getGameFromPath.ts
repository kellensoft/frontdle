export function getGameFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  return segments[0] ?? 'default';
}