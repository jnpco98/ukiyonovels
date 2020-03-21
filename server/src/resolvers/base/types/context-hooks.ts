import { Context } from '../../../lib/resolver/context';
import { BaseEntity } from 'typeorm';

export interface ContextHooks<T extends Partial<BaseEntity>> {
  get?: (entity: T, ctx?: Context, data?: any) => Promise<T | null>;
  create?: (entity: T, ctx?: Context, data?: any) => Promise<T | null>;
  update?: (entity: T, ctx?: Context, data?: any) => Promise<T | null>;
  delete?: (entity: T, ctx?: Context, data?: any) => Promise<T | null>;
}
