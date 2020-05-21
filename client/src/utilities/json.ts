import { KeysOfString } from "@utilities/types";

export function jsonDotNotation(src: KeysOfString<any>, key: string, separator: string = '.') {
  const path = key.split(separator).filter(k => k);
  return path.reduce((dive, key) => {
    const value = dive[key];
    if(typeof value === 'undefined') throw new Error(`Key doesn't exist`);
    return value
  }, src);
}