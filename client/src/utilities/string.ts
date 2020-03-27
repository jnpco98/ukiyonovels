export function truncate(str: string, length: number) {
  if (str.length <= length) {
    return str;
  }
  const substring = str.substr(0, length);
  return `${substring.substr(0, substring.lastIndexOf(' '))}...`;
}

export function truncateNumber(num: number, places: number) {
  const suffix = 'k';
  const truncated =
    num > 999 ? `${(num / 1000).toFixed(places)}${suffix}` : num.toString();
  const lastDigit = truncated.slice(-2);

  if (lastDigit === `0${suffix}` && places === 1) {
    return `${truncated.slice(0, -3)}${suffix}`;
  }
  return truncated;
}
