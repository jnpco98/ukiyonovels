import { getConnectionOptions, createConnection } from "typeorm";

export async function initializeConnection(drop: boolean = false) {
  const configuration = await getConnectionOptions(process.env.NODE_ENV);
  const connectionParams = { ...configuration, name: 'default' };

  if(drop) {
    connectionParams.synchronize = drop;
    connectionParams.dropSchema = drop;
  }

  const connection = await createConnection(connectionParams);
  return connection;
}