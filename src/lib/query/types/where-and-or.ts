import { WhereFilterParams } from "./where-filter";

export interface WhereAndOrParams {
  AND?: WhereFilterParams[];
  OR?: WhereFilterParams[];
}
