import { Context } from "../../types/context";
import ROLES from "../../constants/roles";

export function authChecker ({ context: { req, res } }: { context: Context }, roles: string[]) {
  const { role, userId } = req.auth;

  if(role === ROLES.owner) return true;
  if(roles.length < 1 && userId) return true;
  if(roles.includes(role)) return true;

  return false;
}