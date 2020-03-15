/**
 * Decode encoded data
 * @param data encoded string
 */
export function unBase64(data: string): string {
  return Buffer.from(data, 'base64').toString('utf8');
}
