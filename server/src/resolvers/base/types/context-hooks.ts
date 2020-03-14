import { Context } from '../../../types/context';
import { BaseEntity } from 'typeorm';

export interface ContextHooks<T extends Partial<BaseEntity>> {
  get?: (entity: T, ctx?: Context) => T | null;
  create?: (entity: T, ctx?: Context) => T | null;
  update?: (entity: T, ctx?: Context) => T | null;
  delete?: (entity: T, ctx?: Context) => T | null;
}
