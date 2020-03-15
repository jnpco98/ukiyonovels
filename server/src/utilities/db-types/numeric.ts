/**
 * Returns true if the passed datatype is numeric
 * 
 * @param field Accepts a database datatype
 */
export function dbFieldIsNumeric(field: string) {
  return [
    'int',
    'int2',
    'int4',
    'int8',
    'integer',
    'tinyint',
    'smallint',
    'mediumint',
    'bigint',
    'dec',
    'decimal',
    'smalldecimal',
    'fixed',
    'numeric',
    'number',
    'uuid'
  ].includes(field.toLowerCase());
}
