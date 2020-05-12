import Log from './logger';
import nanoid from 'nanoid';

/**
 * Logs error with tracking id
 * @param error Error to be logged
 */
export function logInternalError(error: Error) {
  const errId = nanoid();
  Log.error(`[${Date.now()}] Error ${errId}`);
  Log.error(error);

  return errId;
}
