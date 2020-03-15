import { WhereFilterParams } from './where-filter';

/**
 * Base filter AND and OR
 * AND contains all the conditions that should be true
 * OR contains all the conditions that are optional
 */
export interface WhereAndOrParams {
  AND?: WhereFilterParams[];
  OR?: WhereFilterParams[];
}
