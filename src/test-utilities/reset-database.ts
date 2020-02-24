import { initializeConnection } from "../utilities/connection/initialize-connection";

(async() => {
  await initializeConnection({ drop: true, databaseToDrop: 'ukiyo-test' });
  console.log('Database reset success')
  process.exit(0);
})();