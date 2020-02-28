import { Context } from "../../types/context";
import ROLES from "../../constants/roles";

export function authChecker ({ context } : { context: Context }, roles: string[]) {
  const { request } = context;
  const { role, userId } = request.auth;

  /**
   * Roles array values come from @Authorized decorator arguments
   * If it's empty / contains anonymous
   * this means no authorization / authentication is required
   */
  if(roles.length < 1 || roles.includes(ROLES.anonymous)) return true;

  /**
   * If a specific role is required
   * this means that this requires a user to 
   * have an account and therefore have an Id
   */
  if(!userId) return false;

  /**
   * Owner should be able to access any resources
   */
  if(role === ROLES.owner) return true;

  /**
   * Check if authorized
   */
  if(roles.includes(role)) return true;

  return false;
}