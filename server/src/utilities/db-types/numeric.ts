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
