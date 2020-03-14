export const ENV_DEVELOPMENT = 'development';
export const ENV_TESTING = 'testing';
export const ENV_PRODUCTION = 'production';

export function isDevelopment() {
  return process.env.NODE_ENV === ENV_DEVELOPMENT;
}

export function isTesting() {
  return process.env.NODE_ENV === ENV_TESTING;
}

export function isProduction() {
  return process.env.NODE_ENV === ENV_PRODUCTION;
}
