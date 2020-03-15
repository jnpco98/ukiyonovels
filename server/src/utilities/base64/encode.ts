/**
 * Encode data
 * @param data data to encode
 */
export function base64(data: string): string {
  return Buffer.from(data, 'utf8').toString('base64');
}
