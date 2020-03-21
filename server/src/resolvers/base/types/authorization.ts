/**
 * Accepts an array of roles
 * for each of the base resolver actions
 */
export interface AuthorizationRequirements {
  get?: string[];
  paginate?: string[];
  create?: string[];
  update?: string[];
  delete?: string[];
}
