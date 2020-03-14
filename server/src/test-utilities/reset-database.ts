import { initializeConnection } from '../utilities/connection/initialize-connection';
import Log from '../utilities/log/local-logger';
(async () => {
  const testDatabase = 'ukiyo_test';
  Log.warn(`Dropping ${testDatabase}`);
  await new Promise(resolve => setTimeout(resolve, 5000));
  await initializeConnection({ drop: true, databaseToDrop: testDatabase });
  Log.info('Database reset success');
  process.exit(0);
})();
