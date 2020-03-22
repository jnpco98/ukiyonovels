const generateQuery = (screen: string): string => `@media only screen and (min-width: ${screen})`;

export const XXSMALL = '411px';
export const XSMALL = '667px';
export const SMALL = '768px';
export const MEDIUM = '1024px';
export const LARGE = '1366px';
export const XLARGE = '1440px';
export const XXLARGE = '1920px';

export const MEDIA_XXSMALL = generateQuery(XXSMALL);
export const MEDIA_XSMALL = generateQuery(XSMALL);
export const MEDIA_SMALL = generateQuery(SMALL);
export const MEDIA_MEDIUM = generateQuery(MEDIUM);
export const MEDIA_LARGE = generateQuery(LARGE);
export const MEDIA_XLARGE = generateQuery(XLARGE);
export const MEDIA_XXLARGE = generateQuery(XXLARGE);
