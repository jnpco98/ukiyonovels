import { getConnectionOptions, createConnection } from 'typeorm';
import { DropDatabaseGuardOptions } from './types/drop-database-guard-options';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { isProduction } from '../env/node-env';

export async function initializeConnection(
  dropDatabaseGuardOptions: DropDatabaseGuardOptions = {}
) {
  const username = process.env.POSTGRES_USER!;
  const password = process.env.POSTGRES_PASSWORD!;
  const host = process.env.POSTGRES_HOST!;
  const port = process.env.POSTGRES_PORT!;
  const database = process.env.POSTGRES_DATABASE!;

  if (isProduction() && (!username || !password || !host || !port || !database))
    throw new Error(`Database config not setup`);

  /**
   * Gets the database configuration
   * from the environment
   */
  const { drop, databaseToDrop } = dropDatabaseGuardOptions;
  const configuration = await getConnectionOptions(process.env.NODE_ENV);

  const connectionParams: { [key: string]: any } = {
    ...configuration,
    name: 'default'
  };

  /**
   * Use env config on production
   */
  if (isProduction()) {
    connectionParams.username = username;
    connectionParams.password = password;
    connectionParams.host = host;
    connectionParams.port = port;
    connectionParams.database = database;
  }

  /**
   * If database is set to drop
   * reset the database and clean all the data
   */
  if (drop && databaseToDrop === connectionParams.database) {
    connectionParams.synchronize = drop;
    connectionParams.dropSchema = drop;
  }

  const connection = await createConnection(connectionParams as PostgresConnectionOptions);
  return connection;
}
