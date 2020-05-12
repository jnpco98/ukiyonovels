import { ensureFile, writeFile } from 'fs-extra';
import path from 'path';
import { printSchema } from 'graphql';

import { createSchema } from './create-schema';

/**
 * Export Graphql SDL from typegraphql resolvers
 * Used to access graphql endpoints
 */
(async () => {
  const schema = await createSchema();
  const sdl = printSchema(schema);
  const exportPath = path.resolve(__dirname, '..', 'export', 'schema.graphql');

  await ensureFile(exportPath);
  await writeFile(exportPath, sdl);
})().catch((e) => console.error(e));
