import { Resolver } from 'type-graphql';
import { BaseBookGetResolver } from './book-base';

/**
 * Book Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class BookGetResolver extends BaseBookGetResolver {}
