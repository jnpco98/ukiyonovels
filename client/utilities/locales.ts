import { jsonDotNotation } from '@utilities/json';
import language from 'locales/en/translation.json';

export function t(key: string) {
  return jsonDotNotation(typeof language === 'object' ? language : {}, key);
}