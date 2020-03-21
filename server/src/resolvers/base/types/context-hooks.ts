import { Context } from '../../../lib/resolver/context';
import { BaseEntity } from 'typeorm';

/**
 * Accepts a hook for each base resolver action
 * 
 * Accepts the entity which can be overwritten
 * depending on the user context authorization
 * and the data arguments passed
 * 
 * This acts similarly to the middleware,
 * but with the freedom of being able to manipulate
 * the entity before creating/modifying it
 * 
 * Used for non-generic actions
 * ex:
 *  Creating an auth token
 *  would need some information/context
 *  about the caller/origin
 */
export interface ContextHooks<T extends Partial<BaseEntity>> {
  get?: (entity: T, ctx?: Context, data?: any) => Promise<T | null>;
  create?: (entity: T, ctx?: Context, data?: any) => Promise<T | null>;
  update?: (entity: T, ctx?: Context, data?: any) => Promise<T | null>;
  delete?: (entity: T, ctx?: Context, data?: any) => Promise<T | null>;
}
