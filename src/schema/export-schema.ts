import { createSchema } from "./create-schema";
import { printSchema } from "graphql";
import { writeFile, ensureDir, ensureFile } from 'fs-extra';
import path from 'path';

(async() => {
  const schema = await createSchema();
  const sdl = printSchema(schema);
  const exportPath = path.resolve(__dirname, '..', 'export', 'schema.graphql');
  
  await ensureFile(exportPath);
  await writeFile(exportPath, sdl);
})().catch(e => console.error(e));