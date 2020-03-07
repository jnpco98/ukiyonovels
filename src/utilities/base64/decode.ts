export function base64(d: string): string {
  return Buffer.from(d, 'utf8').toString('base64');
}