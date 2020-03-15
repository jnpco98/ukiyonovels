export const ENV_DEVELOPMENT = 'development';
export const ENV_TESTING = 'testing';
export const ENV_PRODUCTION = 'production';

/**
 * Returns true if environment 
 * is set to development
 */
export function isDevelopment() {
  return process.env.NODE_ENV === ENV_DEVELOPMENT;
}

/**
 * Returns true if environment 
 * is set to testing
 */
export function isTesting() {
  return process.env.NODE_ENV === ENV_TESTING;
}

/**
 * Returns true if environment 
 * is set to production
 */
export function isProduction() {
  return process.env.NODE_ENV === ENV_PRODUCTION;
}
