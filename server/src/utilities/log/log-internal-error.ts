import nanoid from 'nanoid';
import Log from './local-logger';

export function logInternalError(error: Error) {
  const errId = nanoid();
  Log.error(`[${Date.now()}] Error ${errId}`);
  Log.error(error);

  return errId;
}
