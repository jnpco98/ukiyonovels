import { jsonDotNotation } from '@utilities/json';

export function t(key: string) {
  const region = 'en';
  const language = require(`../locales/${region}/translation.json`);
  return jsonDotNotation(typeof language === 'object' ? language : {}, key);
}