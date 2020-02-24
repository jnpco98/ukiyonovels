import { getConnectionOptions, createConnection } from "typeorm";

interface DropDatabaseGuardOptions {
  drop?: boolean;
  databaseToDrop?: string;
}

export async function initializeConnection(dropDatabaseGuardOptions: DropDatabaseGuardOptions = {}) {
  const { drop, databaseToDrop } = dropDatabaseGuardOptions;
  const configuration = await getConnectionOptions(process.env.NODE_ENV);
  const connectionParams = { ...configuration, name: 'default' };

  if(drop && databaseToDrop === connectionParams.database) {
    connectionParams.synchronize = drop;
    connectionParams.dropSchema = drop;
  }

  const connection = await createConnection(connectionParams);
  return connection;
}