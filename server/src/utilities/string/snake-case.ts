/**
 * Converts string to snake case
 * for use with database name and fields
 */
export function snakeCase(s: string) {
  return s.replace(/\.?([A-Z]+)/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '');
}
