/**
 * Params guard that is 
 * required when dropping a database
 * 
 * Additional security to 
 * avoid deleting the database
 */
export interface DropDatabaseGuardOptions {
  drop?: boolean;
  databaseToDrop?: string;
}
